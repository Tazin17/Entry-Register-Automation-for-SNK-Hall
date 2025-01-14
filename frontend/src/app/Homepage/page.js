import React from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";

const Homepage = () => {
    return (
        <div className='flex flex-col min-h-screen bg-background text-foreground'>
            <LeftSideBar/>
            <main className='flex flex-1 pt-16'>

            </main>
        </div>
    )
}
export default Homepage