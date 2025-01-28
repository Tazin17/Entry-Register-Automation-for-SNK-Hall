// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import React from "react";

// const UserDetailsCard = () => {
//     const student_details = [
//         {
//           guestId: "1"
//           studentId: "2004015",
//           studentName: "Rashfi Tabassum",
//           roomNumber: "520",
//           contactNumber: "012345678",
//         },
//         {
//             studentId: "2",
//             studentName: "Fouzia Fariha",
//             roomNumber: "423",
//             contactNumber: "012355678",
//         },
//         {
//             studentId: "2004013",
//             studentName: "Pritha Saha",
//             roomNumber: "520",
//             contactNumber: "013355678",
//         },
  
//     ]
//     return ( 
//         <div className="bg-red-2">
//             <Card>
//             <CardHeader>
//                 <CardTitle className='text-2xl'>Guest Entry</CardTitle>
//                 <CardDescription></CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <Table>
//                     <TableHeader>
//                         <TableRow>
//                             <TableHead>Guest ID</TableHead>
//                             <TableHead>Student ID</TableHead>
//                             <TableHead>Guest Name</TableHead>
//                             <TableHead>Contact Number</TableHead>
//                             <TableHead>Action</TableHead>
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
                        
//                         {student_details.map((detail)=>(
//                             <Dialog>
//                                 <DialogTrigger asChild>
//                                     <TableRow key={detail.studentId}>
//                                         <TableCell>{detail.guestId}</TableCell>
//                                         <TableCell>{detail.studentId}</TableCell>
//                                         <TableCell>{detail.guestName}</TableCell>
//                                         <TableCell>{detail.contactNumber}</TableCell>
//                                         <TableCell>{detail.actionTaken}</TableCell>
//                                     </TableRow>
//                                 </DialogTrigger>
//                                 <DialogContent>
//                                     <DialogHeader>
//                                         <DialogTitle>Guest Entry</DialogTitle>
//                                         <DialogDescription>Guest Entry Approval/Rejection</DialogDescription>
//                                         <div >
//                                             <div className="flex items-center">
//                                                 <div className="font-semibold text-sm mr-2">Guest ID :</div>
//                                                 <div className="text-sm">{detail.guestId}</div>
//                                             </div>
//                                             <div className="flex items-center">
//                                                 <div className="font-semibold text-sm mr-2">Student ID :</div>
//                                                 <div className="text-sm">{detail.studentId}</div>
//                                             </div>
//                                             <div className="flex items-center">
//                                                 <div className="font-semibold text-sm mr-2">Guest Name :</div>
//                                                 <div className="text-sm">{detail.guestName}</div>
//                                             </div>
//                                             <div className="flex items-center">
//                                                 <div className="font-semibold text-sm mr-2">Contact :</div>
//                                                 <div className="text-sm">{detail.contactNumber}</div>
//                                             </div>
//                                             <div className="flex items-center">
//                                                 <div className="font-semibold text-sm mr-2">Action :</div>
//                                                 <div className="text-sm">{detail.actionTaken}</div>
//                                             </div>
//                                         </div>
//                                     </DialogHeader>
//                                 </DialogContent>
//                             </Dialog>
                            
//                         ))}
//                     </TableBody>
//                 </Table>
//             </CardContent>
//             </Card>
//         </div>
//     )
// }
// export default UserDetailsCard

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";

const GuestEntryCard = () => {
    const guestDetails = [
        {
            guestId: "1",
            studentId: "2004017",
            guestName: "Mr. A",
            reason: "Parent Visit",
        },
        {
            guestId: "2",
            studentId: "2004016",
            guestName: "Mr. B",
            reason: "Document Submission",
        },
        {
            guestId: "3",
            studentId: "2004015",
            guestName: "Mr. C",
            reason: "Emergency",
        },
    ];

    return (
        <div className="p-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl flex justify-center">Guest Entry Requests</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[rgb(52,61,98)] text-white hover:bg-[rgb(78,85,113)]">
                                <TableHead className="text-white">Guest ID</TableHead>
                                <TableHead className="text-white">Student ID</TableHead>
                                <TableHead className="text-white">Guest Name</TableHead>
                                <TableHead className="text-white">Reason</TableHead>
                                <TableHead className="text-white">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {guestDetails.map((detail) => (
                                <TableRow key={detail.guestId} className="border-b">
                                    <TableCell>{detail.guestId}</TableCell>
                                    <TableCell>{detail.studentId}</TableCell>
                                    <TableCell>{detail.guestName}</TableCell>
                                    <TableCell>{detail.reason}</TableCell>
                                    <TableCell className="space-x-2">
                                        <Button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-[rgb(25,50,34)]">Approve</Button>
                                        <Button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-[rgb(67,34,34)]">Reject</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default GuestEntryCard;
