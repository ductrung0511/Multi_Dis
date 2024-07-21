import { supabase } from "./supabase";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useMembersList = () =>{
    return  useQuery({
        queryKey: ['members'],
        queryFn: async () => {
          console.log('///')
          const { data, error } = await supabase.from('profile').select('*');
          if (error) {
            throw new Error(error.message);
          }
          return data;
        },
      });
}

export const useRoomsList = () =>{
    return  useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
          const { data, error } = await supabase.from('room').select('*');
          if (error) {
            throw new Error(error.message);
          }
          return data;
        },
        
      });
}

export const useRoomRead = (id  ) =>{ // undefined / null
  if (!id || id === undefined) {
    console.log("empty ID")
    
  }
  return  useQuery({
      queryKey: ['room', id],
      queryFn: async () => {
        const { data, error } = await supabase.from('room').select('*').eq("id", id).single();
        if (error) {
          throw new Error(error.message);
        }
        return data;
      },
      enabled: !!id, // Enable the query only if id is not null or undefined
    },
    
  );
}



export const useGymsList = () =>{
  return  useQuery({
      queryKey: ['gyms'],
      queryFn: async () => {
        const { data, error } = await supabase.from('gym').select('*');
        console.log(data, "gyms")
        if (error) {
          throw new Error(error.message);
        }
        return data;
      },
    });
}


export const useLocation = (ids) => {
  return useQuery({
    queryKey: ['location', ids],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('location')
        .select('*')
        .in('user_id', ids)
        .order('created_at', { ascending: false });
      if (error) {
        throw new Error(error.message);
      }
      console.log(data[0], 'locations of all')
      
      const latestLocationsMap = new Map();
      data.forEach(item => {
        const { user_id, created_at } = item;
        const existingItem = latestLocationsMap.get(user_id);

        // If no existing item or the current item is more recent, update the map
        if (!existingItem || new Date(item.created_at) > new Date(existingItem.created_at)) {
          latestLocationsMap.set(user_id, item);
        }
      });

      // Convert the map values to an array
      console.log(Array.from(latestLocationsMap.values()), "Test of new function")
      return Array.from(latestLocationsMap.values());
      return data;
    },
    enabled: !!ids,
  });
};

export const useRoomUpdate = () =>{
  return useMutation({
    async mutationFn( data ){
      console.log(data)
      const { data: returnData, error } = await supabase
      .from('room')
      .update(data.update)
      .eq('id', data.id)
      .select()
      if(error){
        console.log(error, 'error in updating room')
        throw error;
      }
      return returnData
    },
    async onSuccess(){

    },
    async onError(){

    },
  })
}

export const useInsertLocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    async mutationFn(data) {
      console.log(data, 'data in to useInsert')
      const { error, data: newLocation } = await supabase.from('location').insert(data)
      .select()
      .single();
      if (error) {
        console.log(error,'error in inserting new row of client location')
        throw error;
      }
      return newLocation;
      },
    async onSuccess() {
      console.warn('success!')
      queryClient.invalidateQueries( { queryKey: ['members'] });

    },
    onError(error) {
      console.log(error);
    },
  });
};


export const useInsertRoom = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data) => {
      const { error, data: newRoom } = await supabase.from('room').insert(data).select().single();
      if (error) {
        console.log(error, 'error in inserting new room');
        throw error;
      }
      return newRoom;
    },
    onSuccess: (data) => {
      console.warn('Room created successfully!', data);
      // Invalidate and refetch the 'gyms' query
      queryClient.invalidateQueries( { queryKey: ['rooms'] });
    },
    onError: (error) => {
      console.log('Error creating room:', error);
    },
  });
};





export const useAddMemberRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const { data: newData, error } = await supabase
        .from('room')
        .update({ members: data.updatedMembers })
        .eq('id', data.id)
        .single();
      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: (data) => {
      console.warn('Room updated successfully!', data);
      queryClient.invalidateQueries({queryKey : ['room', data.id]});
    },
    onError: (error) => {
      console.log('Error update room:', error);
    },
  });
}
