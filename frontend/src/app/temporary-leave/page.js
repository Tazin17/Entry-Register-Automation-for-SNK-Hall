"use client";
import React from "react";
import ULeftSideBar from "../user/ULeftSideBar";
import Leave from "./Leave";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex flex-1 pt-16">
        <ULeftSideBar />
        <div className="dark:bg-blue-400 ml-[470px] mt-[50px] flex-1 px-4 py-6 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-full mx-auto bg-gray-500">
          <Leave />
        </div>
      </main>
    </div>
  );
};

export default page;