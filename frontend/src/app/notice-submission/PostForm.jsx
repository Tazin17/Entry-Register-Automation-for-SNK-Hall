// import React from "react";

// const PostForm = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       {/* Increased height */}
//       <div className="lg:w-[500px] mt-20 min-h-[600px] bg-[rgb(28,44,59)] p-6 rounded-lg shadow-lg relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 text-2xl right-2 text-gray-400 hover:text-gray-600"
//         >
//           &times;
//         </button>

//         {/* Form */}
//         <form className="w-76  min-h-[550px] flex flex-col gap-4">
//           <h2 className="text-xl font-semibold text-white">Submit a Notice</h2>
//           <input
//             type="text"
//             placeholder="Notice Title..."
//             className="border p-2 rounded-md overflow-auto"
//           />
//           <textarea
//             placeholder="Write the Notice Content here..."
//             className="border p-2 rounded-md min-h-[400px] overflow-auto"
//           />
//           <div className="flex items-center justify-center">
//           <button
//             type="submit"
//             className="bg-[rgb(16,21,27)] text-white p-2 hover:bg-[rgb(50,55,60)] rounded-md w-32"
//           >
//             Submit
//           </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostForm;

// import React from "react";

// const PostForm = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="lg:w-[500px] sm:w-[400px] mt-20 min-h-[600px] bg-[rgb(28,44,59)] p-6 rounded-lg shadow-lg relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
//         >
//           &times;
//         </button>
//         <form className="w-full flex flex-col gap-4">
//           <h2 className="text-xl font-semibold text-white">Submit a Notice</h2>
//           <input
//             type="text"
//             placeholder="Notice Title..."
//             className="border p-2 rounded-md"
//           />
//           <textarea
//             placeholder="Write the Notice Content here..."
//             className="border p-2 rounded-md min-h-[400px]"
//           />
//           {/* <button
//             type="submit"
//             className="bg-[rgb(16,21,27)] text-white p-2 rounded-md hover:bg-[rgb(50,55,60)]"
//           >
//             Submit
//           </button> */}

//           <div className="flex items-center justify-center">
//             <button
//               type="submit"
//               className="bg-[rgb(85,105,139)] text-white p-2 hover:bg-[rgb(50,55,60)] rounded-md w-32"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostForm;

// PostForm.jsx
import React from "react";

const PostForm = () => {
  return (
    <form className="w-full flex flex-col gap-4">
      <h2 className="text-xl flex justify-center font-semibold text-white">Submit a Notice</h2>
      <input
        type="text"
        placeholder="Notice Title..."
        className="border p-2 rounded-md"
      />
      <textarea
        placeholder="Write the Notice Content here..."
        className="border p-2 rounded-md min-h-[400px]"
      />
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-[rgb(85,105,139)] text-white p-2 hover:bg-[rgb(50,55,60)] rounded-md w-32"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PostForm;



