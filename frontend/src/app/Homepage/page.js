import React from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import ProfileCard from "../components/ProfileCard";
const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header Component */}
      <Header />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <LeftSideBar />

        {/* Main Content */}
        <main className="flex flex-1 flex-col justify-center items-center bg-black">
          {/* Upper Section with Pink Background */}
          
          <div
  className="w-full flex-1 flex justify-center items-center bg-cover bg-center bg-pink-300"
></div>

          {/* Lower Section with White Background */}
          <div className="w-full bg-white flex-1 flex justify-center items-center">
            <div className="absolute top-1/2 transform -translate-y-1/2  ml-40 flex justify-center items-center z-100 w-[30%] h-[40%]">
              {/* Profile Card */}
              <ProfileCard
                name="Samatha Alam"
                department="Dept of CSE [2004016]"
                lateEntries={10}
                temporaryLeaves={8}
              />
              {/* Negative margin to pull part of the card into the upper section */}
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
