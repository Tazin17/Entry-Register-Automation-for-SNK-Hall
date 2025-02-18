// import React from "react";
// import Header from "../components/Header";
// import LeftSideBar from "../components/LeftSideBar";
// import HomeCard from "../components/HomeCard";

// const Homepage = () => {
//     return (
//         <div className='flex flex-col min-h-screen bg-background text-foreground'>
//             <main className='flex flex-1 pt-16'>
//                 <LeftSideBar/>
//                 <div className="ml-160 flex-1 px-4 py-6 lg:max-w-2xl xl:max-w-3xl h-full pb-16 mx-auto">
//                     <HomeCard/>
//                 </div>
//             </main>
//         </div>
//     )
// }
// export default Homepage


// "use client";  // If you're using Next.js 13+ and it's a client-side component
// import React, { useState } from "react";
// import Header from "../components/Header";
// import LeftSideBar from "../components/LeftSideBar"; // Import LeftSideBar
// import PostForm from "../components/notice-submission/PostForm"; // Import PostForm

// const HomePage = () => {
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   return (
//     // <div className="flex">
//       {/* Left Sidebar */}
//       <LeftSideBar setIsFormVisible={setIsFormVisible} />  Pass function to LeftSideBar

//       {/* Main content area */}
//       <main className="flex-grow">
//         {/* Your homepage content goes here */}
//         {/* <h1 className="text-2xl font-bold">Homepage Content</h1> */}
//         {/* Other content */}
//       </main>

//       {/* Conditionally render the PostForm when isFormVisible is true */}
//       {isFormVisible && <PostForm onClose={() => setIsFormVisible(false)} />}
//     // </div>
//   );
// };

// export default HomePage;

"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import HomeCard from "../components/HomeCard";
import PostForm from "../notice-submission/NewPostForm";
import ProfileCard from "../components/ProfileCard";
const Homepage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State for PostForm visibility

  const handleCloseForm = () => {
    setIsFormVisible(false); // Close PostForm
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex flex-1 pt-16">
        <LeftSideBar setIsFormVisible={setIsFormVisible} />
        <div className=" flex-1 p-4 py-6 lg:max-w-2xl xl:max-w-3xl h-full mx-auto">
          <HomeCard />
        </div>
      </main>

      {/* Render PostForm conditionally */}
      {isFormVisible && <PostForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Homepage;
