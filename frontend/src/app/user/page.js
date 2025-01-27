import React from "react";
import Header from "../components/Header";
import ProfileCard from "../user/ProfileCard";
import ULeftSideBar from "../user/ULeftSideBar";
const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header Component */}
      <Header />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <ULeftSideBar/>       

        {/* Main Content */}
        <main className="flex flex-1 flex-col justify-center items-center bg-black">
          {/* Upper Section with Pink Background */}
          
          <div
        className="w-full flex-1 bg-custom-bg bg-cover flex justify-center items-center bg-cover bg-center bg-pink-200"
        ></div>

          {/* Lower Section with White Background */}
          <div className="w-full bg-white flex-1 flex justify-center items-center">
            
          </div>
          <div className=" absolute top-1/2 transform -translate-y-1/2  ml-40 flex justify-center items-center z-100 w-[50%] h-[55%]">
              {/* Profile Card */}
              <ProfileCard
                name="Samatha Alam"
                department="Dept of CSE [2004016]"
                lateEntries={10}
                temporaryLeaves={8}
              />
              {/* Negative margin to pull part of the card into the upper section */}
              
            </div>
        </main>
      </div>
    </div>
  );
};

export default page;