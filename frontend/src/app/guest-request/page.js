"use client";
import React from "react";
import LeftSideBar from "../user/ULeftSideBar";
import PostForm from "./GuestForm";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex flex-1 pt-16">
        <LeftSideBar />
        <div className="dark:bg-[rgb(93,133,88)] ml-[670px] mt-[40px] w-[600px] px-4 py-6 h-[630px] mx-auto bg-[rgb(24,62,57)] rounded-md">
          <PostForm />
        </div>
      </main>
    </div>
  );
};

export default page;