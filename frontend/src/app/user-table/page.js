'use client'
import React from "react";
import LeftSideBar from "../user/ULeftSideBar";
import LateEntryDetails from "./LateEntryDetails";

const page = () => {
    return ( 
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
            <main className='flex flex-1 pt-16'>
                <LeftSideBar/>
                <div className="ml-[450px] flex-1 px-4 py-6 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-full mx-auto">
                    <LateEntryDetails/>
                </div>
            </main>
        </div>
        )
    }
export default page