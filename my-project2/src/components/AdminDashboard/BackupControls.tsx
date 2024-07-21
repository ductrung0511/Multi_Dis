/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";

const BackupControls: React.FC = ({data, locations}) => {
  const [show, setShow] = useState(false)
  const [showData, setShowData] = useState(false)
  console.log(data)
  return (
    <>
    <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-96 text-base font-medium leading-6 max-md:mt-10">
        <button onClick={()=>{setShowData(!showData)}} className="justify-center px-4 py-2 text-black rounded-lg bg-zinc-100">
          Backup user location and activity data
        </button>
        <button onClick={()=>{setShow(!show)}} className="justify-center px-4 py-2 mt-4 text-white bg-black rounded-lg">
          Backup data to your computer
        </button>
      </div>
    </div>
    {show && <div className="bg-white  text-gray-500 font-mono"> {JSON.stringify(data)} </div>}
    {showData && <div className="bg-white  text-gray-500 font-mono"> {JSON.stringify(locations)} </div>}
    </>
  );
};

export default BackupControls;
