"use client";
import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import PostForm from "./PostForm";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex flex-1 pt-16">
        <LeftSideBar />
        <div className="dark:bg-[rgb(108,150,185)] ml-[470px] mt-[50px] flex-1 px-4 py-6 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-full mx-auto bg-[rgb(40,64,85)]">
          <PostForm />
        </div>
      </main>
    </div>
  );
};

export default page;