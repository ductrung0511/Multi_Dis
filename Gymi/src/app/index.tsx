import React from 'react';
import Button from '../components/Button';
import { Link, Redirect } from 'expo-router';
import { useAuth } from '../provider/AuthProvider';
import { ActivityIndicator } from 'react-native-paper';
import { supabase } from '../lib/supabase';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { Alert } from 'react-native';
import Colors from '../constants/Colors';


/// value being stored in SecureStore is larger than 2048 bytes and it ay not be stored ......

const index = () => {
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center',  padding: 10 }}>
      
     <>
      <Text style={{fontSize: 40, marginVertical: 10, fontWeight: '900'}}>Xin Chào</Text>

      <View style={{backgroundColor: Colors.light.green, borderRadius: 10, padding: 20, marginVertical: 20}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}> 
        Là một doanh nghiệp địa phương, chúng tôi cảm ơn bạn vì
        ủng hộ và hy vọng bạn thích.
        </Text>
      </View>
      <Link href={'/(consumer)'} asChild>
        <Button text="Consumer" />
      </Link>
      </>
    </View>
  );
  {/* { (!loading && isBrand ) &&
  <Link href={'/(brand)'} asChild>
    <Button text="Into Brand Space" />
  </Link>
  } */}
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  image: {
    width: 170,
    aspectRatio: 1,
    alignSelf: 'center',
    marginRight: 10,
    borderRadius: 30,
  },
})