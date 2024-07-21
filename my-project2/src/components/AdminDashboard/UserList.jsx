/**
 * This code was generated by Builder.io.
 */
import React from "react";


const UserList = ({users}) => {
  return (
    <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-6 w-full text-base leading-6 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 max-md:px-5 max-md:mt-8 max-md:max-w-full">
        <h2 className="font-semibold text-black max-md:max-w-full">User</h2>
        {users?.map((user, index) => (
          <div
            key={index}
            className="flex gap-4 py-3 mt-4 whitespace-nowrap rounded-lg max-md:flex-wrap"
          >
            <img
              loading="lazy"
              src={user.avatar}
              className="shrink-0 w-12 aspect-square"
              alt={`${user.name}'s avatar`}
            />
            <div className="flex flex-col flex-1">
              <div className="text-ellipsis text-zinc-700">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
