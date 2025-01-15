import React from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import HomeCard from "../components/HomeCard";

const Homepage = () => {
    return (
        <div className='flex flex-col min-h-screen bg-background text-foreground'>
            <main className='flex flex-1 pt-16'>
                <LeftSideBar/>
                <div className="ml-160 flex-1 px-4 py-6 lg:max-w-2xl xl:max-w-3xl h-full pb-16 mx-auto">
                    <HomeCard/>
                </div>
            </main>
        </div>
    )
}
export default Homepage