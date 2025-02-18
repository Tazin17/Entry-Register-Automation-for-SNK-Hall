"use client";
import React from "react";
import UHeader from "../user/UHeader";
import ProfileCard from "../user/ProfileCard";
import ULeftSideBar from "../user/ULeftSideBar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, PenLine, Save, Upload, X } from "lucide-react";
import userStore from "@/store/userStore";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { AnimatePresence } from "framer-motion";
// import { Camera, PenLine, Save, Upload, X } from "lucide-react";
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";


const page = () => {
  const { user, clearUser } = userStore();
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header Component */}
      <UHeader />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <ULeftSideBar />

        {/* Main Content */}
        <main className="flex flex-1 flex-col justify-center items-center bg-black">
          {/* Upper Section with Pink Background */}

          {/* <div className="w-full flex-1  flex justify-center items-center">
          <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-700 rounded-full overflow-hidden">
            <AvatarImage
              src="https://media.istockphoto.com/id/498309616/photo/great-ocean-road-at-night-milky-way-view.jpg?s=612x612&w=0&k=20&c=fJGWCAB4JoXaQD6gjJRHjPmPIRvx5e6K-1Oq2EeOZwk="
              alt="image avatar"
              className="w-full h-full object-cover"
            />
            {/* <Avatar className="h-10 w-10 rounded-full overflow-hidden">
                              <AvatarImage
                                src="https://media.istockphoto.com/id/498309616/photo/great-ocean-road-at-night-milky-way-view.jpg?s=612x612&w=0&k=20&c=fJGWCAB4JoXaQD6gjJRHjPmPIRvx5e6K-1Oq2EeOZwk="
                                alt="image avatar"
                                className="w-full h-full object-cover"
                              />
                              <AvatarFallback>N</AvatarFallback>
                            </Avatar> */}
          {/* <AvatarFallback className="dark:bg-gray-400">N</AvatarFallback>
          </Avatar> 
          </div>   */}

          <div className="ml-60 relative w-[1200px] h-64 md:h-80 bg-gray-300 overflow-hidden">
            <a
              href="https://your-link-here.com"
              target="_blank"
              rel="noopener noreferrer"
            >
             <img
  src={user?.profilePicture || 'default-image.jpg'} // Add fallback image if profilePicture doesn't exist
  alt="cover"
  className="w-full h-full object-cover"
/>

            </a>

            <Button
              className="absolute bottom-4 right-4 flex items-center"
              variant="secondary"
              size="sm"
              onClick={() => setIsEditCoverModel(true)}
            >
              <Camera className="mr-0 md:mr-2 h-4 w-4" />
              <span className="hidden md:block">Edit Cover Photo</span>
            </Button>
          </div>

          {/* Lower Section with White Background */}
          <div className="w-full bg-white flex-1 flex justify-center items-center"></div>
          <div className=" absolute top-1/2 transform -translate-y-1/2  ml-40 flex justify-center items-center z-100 w-[50%] h-[55%]">
            {/* Profile Card */}
            <ProfileCard
              name={user?.username}
              department={user?.department}
              id={user?.id}
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

{
  /* <Avatar className="h-8 w-8">
{user?.profilePicture ? (
  <AvatarImage
    src={user?.profilePicture}
    alt={user?.username}
  />
) : (
  <AvatarFallback>{userPlaceholder}</AvatarFallback>
)}
</Avatar> */
}
