import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const LeaveAndNotices = () => {
  // Mock data for notices (replace with actual data from hall authority)
  const [notices, setNotices] = useState([
    {
      title: "Hall Maintenance Notice",
      date: "2025-01-15",
      content: "Maintenance on Jan 20. Be prepared.",
      description:"The hall entry time has been updated, allowing entry from 6:00 AM to 10:00 PM. Residents must adhere to this schedule, and late entries will require prior permission from the hall authority. Emergency cases should be reported in advance."
    },
    {
      title: "Time Update",
      date: "2025-01-10",
      content: "Time updated. Check schedule.",
      description:"The hall entry time has been updated, allowing entry from 6:00 AM to 10:00 PM. Residents must adhere to this schedule, and late entries will require prior permission from the hall authority. Emergency cases should be reported in advance."
    },
  ]);

  // Function to show notice details in a pop-up
  const showNoticeDetails = (notice) => {
    Swal.fire({
      title: notice.title,
      html: `<div style="text-align: left;">
      <p style="font-20px"><strong>Date:</strong> ${notice.date}</p>
             <p><strong>About:</strong> ${notice.content}</p>
              <p><strong>Description:</strong> ${notice.description}</p>
              </div>`,

      confirmButtonText: "Close",
      background: "gray-200",
      color: "black",
      confirmButtonColor: "blue",
     
    });
  };
  

  return (
    <div className="w-full flex flex-col gap-8 bg-gray-200 p-3">
      {/* Section for Notices */}
      <div className="notices">
        <h2 className="text-xl flex justify-center font-semibold text-black mb-4">
          Notices from Hall Authority
        </h2>

        {notices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-separate border border-black rounded-lg">
              <thead className="bg-green-300 text-black">
                <tr>
                  <th className="p-2">Title</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Content</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {notices.map((notice, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-200 cursor-pointer"
                    onClick={() => showNoticeDetails(notice)}
                  >
                    <td className="p-2">{notice.title}</td>
                    <td className="p-2">{notice.date}</td>
                    <td className="p-2">{notice.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-white">No notices available.</p>
        )}
      </div>
    </div>
  );
};

export default LeaveAndNotices;
