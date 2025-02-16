'use client'
import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import UserDetailsCard from "./UserDetailsCard";

const page = () => {
    return ( 
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
            <main className='flex flex-1 pt-16'>
                <LeftSideBar/>
                <div className="ml-64 flex-1 px-4 py-6 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-full mx-auto">
                    <UserDetailsCard/>
                </div>
            </main>
        </div>
        )
    }
export default page