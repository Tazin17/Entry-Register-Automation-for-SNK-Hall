import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const LateStudentsCard = () => {
    
    const student_details = [
    {
        studentId: "2004004",
        studentName: "Rashfi Tabassum",
        roomNumber: "520",
        lateEntry: ['01/01/2025 19:20:05', '02/01/2025 19:20:05', '05/01/2025 19:20:05'],
        contactNumber: "012345678",
    },
    {
        studentId: "2004012",
        studentName: "Fouzia Fariha",
        roomNumber: "423",
        lateEntry: ['04/09/2024 19:20:05', '05/05/2024 19:20:05', '03/01/2025 19:20:05'],
        contactNumber: "012355678",
    },
    {
        studentId: "2004013",
        studentName: "Pritha Saha",
        roomNumber: "520",
        lateEntry: [ '29/05/2024 19:20:05'],
        contactNumber: "013355678",
    },
    {
        studentId: "2004014",
        studentName: "Adiba Fairooz",
        roomNumber: "520",
        lateEntry: ['09/09/2024 19:20:05', '29/05/2024 19:20:05'],
        contactNumber: "012355679",
    },
    {
        studentId: "2004015",
        studentName: "Walisa Alam",
        roomNumber: "424",
        lateEntry: ['09/09/2024 19:20:05', '25/07/2024 19:20:05'],
        contactNumber: "012352679",
    },
    {
        studentId: "2004016",
        studentName: "Rashme Akther",
        roomNumber: "424",
        lateEntry: ['02/09/2024 19:20:05'],
        contactNumber: "012355678",
    },
    {
        studentId: "2004017",
        studentName: "Nusrat Tazin",
        roomNumber: "424",
        lateEntry: ['27/09/2024 19:20:05'],
        contactNumber: "012355679",
    },
    {
        studentId: "2004020",
        studentName: "Nabila Tabassum",
        roomNumber: "520",
        lateEntry: ['12/03/2024 19:20:05'],
        contactNumber: "012355677",
    },
    {
        studentId: "2004023",
        studentName: "Arpita Mollik",
        roomNumber: "423",
        lateEntry: ['18/07/2024 19:20:05'],
        contactNumber: "012355577",
    },
    {
        studentId: "2004027",
        studentName: "Shiti Chowdhury",
        roomNumber: "520",
        lateEntry: ['04/09/2024 19:20:05', '05/05/2024 19:20:05', '03/01/2025 19:20:05'],
        contactNumber: "012355571",
    },
    {
        studentId: "2004041",
        studentName: "Sidratul Muntaha",
        roomNumber: "208",
        lateEntry: ['04/09/2024 19:20:05', '03/01/2025 19:20:05'],
        contactNumber: "012355579",
    }
    ]
    return ( 
        <div className="bg-red-2">
            <Card>
            <CardHeader>
                <CardTitle className='text-2xl'>Late Student Details</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student ID</TableHead>
                            <TableHead>Student Name</TableHead>
                            <TableHead>Late Frequency</TableHead>
                            <TableHead>Latest Late Entry Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        
                        {student_details.map((detail)=>(
                            <Dialog>
                                <DialogTrigger asChild>
                                    <TableRow key={detail.studentId}>
                                        <TableCell>{detail.studentId}</TableCell>
                                        <TableCell>{detail.studentName}</TableCell>
                                        <TableCell align='center'>{detail.lateEntry?.length}</TableCell>
                                        <TableCell>{detail.lateEntry?.[detail.lateEntry?.length -1]}</TableCell>
                                    </TableRow>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Late Student Details</DialogTitle>
                                        <DialogDescription>All Late Info Regarding the Student</DialogDescription>
                                        <div >
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm w-[120px]">Name</div>
                                                <div className="text-sm">{detail.studentName}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm w-[120px]">ID</div>
                                                <div className="text-sm">{detail.studentId}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm w-[120px]">Late Frequency</div>
                                                <div className="text-sm">{detail.lateEntry?.length}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm w-[120px]">Late Times</div>
                                                <div className="text-sm">{ detail.lateEntry?.length > 0 ? detail.lateEntry.join(' , '): ''}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm w-[120px]">Room Number</div>
                                                <div className="text-sm">{detail.roomNumber}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm w-[120px]">Contact</div>
                                                <div className="text-sm">{detail.contactNumber}</div>
                                            </div>
                                        </div>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                            
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            </Card>
        </div>
        
    )
}
export default LateStudentsCard;