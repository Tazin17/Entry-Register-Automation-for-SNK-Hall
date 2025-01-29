import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const UserDetailsCard = () => {
    const studentId = "2004016"; // Example: Retrieve logged-in student's ID dynamically
    const late_entries = [
        { studentId: "2004016", date: "2025-01-20", time: "9:30 PM" },
        { studentId: "2004016", date: "2025-01-02", time: "8:15 AM" },
    ];

    const userLateEntries = late_entries
        .filter(entry => entry.studentId === studentId)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">My Late Entry List</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table className="border-separate border border-gray-300 rounded-lg"> {/* Added border styling */}
                        <TableHeader className="bg-blue-300 text-white"> {/* Header background color */}
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Time</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="bg-gray-300"> {/* Body background color */}
                            {userLateEntries.length > 0 ? (
                                userLateEntries.map((entry) => (
                                    <TableRow key={`${entry.studentId}-${entry.date}`} className="hover:bg-gray-200"> {/* Row hover effect */}
                                        <TableCell>{entry.date}</TableCell>
                                        <TableCell>{entry.time}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={2} className="text-center">No late entries found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserDetailsCard;
