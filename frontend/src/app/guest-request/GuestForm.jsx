import React from "react";

const GuestForm = () => {
  return (
    <form className="w-full flex flex-col gap-4">
      <h2 className="text-xl flex justify-center font-semibold text-white">Submit a Guest Request Form</h2>
      <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Enter Your Student ID..."
        className="border p-2 rounded-md"
      />
       <input
        type="text"
        placeholder="Enter The Guest ID"
        className="border p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Write the Guest's Name..."
        className="border p-2 rounded-md"
      />
       <input
        type="text"
        placeholder="Write the Guest's Number..."
        className="border p-2 rounded-md"
      />
      </div>
       <input
        type="text"
        placeholder="Write the Title of the Visit..."
        className="border p-2 rounded-md"
      />
      <textarea
        placeholder="Describe the cause of Visit here..."
        className="border p-2 rounded-md min-h-[310px]"
      />
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-[rgb(84,130,91)] dark:bg-[rgb(54,72,54)] dark:hover:bg-[rgb(131,165,149)] text-white p-2 hover:bg-[rgb(102,180,118)] rounded-md w-32"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default GuestForm;



