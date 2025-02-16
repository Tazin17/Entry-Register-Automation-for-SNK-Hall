"use client";
import React, { useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import LateStudentsCard from "./LateStudentsCard";

const page = () => {
    return (
        <div className='flex flex-col min-h-screen bg-background text-foreground'>
            <main className='flex flex-1 pt-16'>
                <LeftSideBar/>
                <div className=" flex-1 p-4 lg:max-w-2xl xl:max-w-3xl h-full mx-auto">
                    <LateStudentsCard/>
                </div>
            </main>
        </div>
    )
}

export default page;