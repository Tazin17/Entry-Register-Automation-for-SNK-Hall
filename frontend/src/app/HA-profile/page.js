"use client";
import React from "react";
import UHeader from "../HA-profile/UHeader";
import ProfileCard from "../HA-profile/ProfileCard";
import ULeftSideBar from "../HA-profile/ULeftSideBar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, PenLine, Save, Upload, X } from "lucide-react";

const page = () => {
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


          <div className="ml-[110px] relative w-[1600px] h-64 md:h-80 bg-gray-300 overflow-hidden">
            <a
              href="https://your-link-here.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/snk hall edit.jpg"
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
              name="Rajia Sultana"
              Designation="Hall Provost"
              Department="Dept. of Chemistry"
            //   lateEntries={10}
            //   temporaryLeaves={8}s
            />
            {/* Negative margin to pull part of the card into the upper section */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;

