import React, { useState } from "react";

const Leave = () => {
  const [leaveDetails, setLeaveDetails] = useState({
    
    startDate: "",
    endDate: "",
    reason: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to server or perform necessary actions)
    console.log(leaveDetails);
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-xl flex justify-center font-semibold text-white">
        Notify Temporary Leave
      </h2>
      
    
      
      {/* Start Date */}
      <input
        type="date"
        name="startDate"
        placeholder="Leave Start Date"
        value={leaveDetails.startDate}
        onChange={handleChange}
        className="border p-2 rounded-md"
      />
      
      {/* End Date */}
      <input
        type="date"
        name="endDate"
        placeholder="Leave End Date"
        value={leaveDetails.endDate}
        onChange={handleChange}
        className="border p-2 rounded-md"
      />
      
      {/* Reason for Leave */}
      <textarea
        name="reason"
        placeholder="Reason for Leave"
        value={leaveDetails.reason}
        onChange={handleChange}
        className="border p-2 rounded-md min-h-[200px]"
      />
      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-300 text-white p-2 hover:bg-blue-500 rounded-md w-32"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Leave;
