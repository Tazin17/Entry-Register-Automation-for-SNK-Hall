import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAllUser } from "@/service/user.service";
import {React, useEffect, useState} from "react";
import toast from "react-hot-toast";

const UserDetailsCard = () => {

    const [student_details, setStudent_details] = useState([]);
    
    // let student_details = [
    //     {
    //       studentId: "2004004",
    //       studentName: "Rashfi Tabassum",
    //       roomNumber: "520",
    //       contactNumber: "012345678",
    //     },
    //     {
    //         studentId: "2004012",
    //         studentName: "Fouzia Fariha",
    //         roomNumber: "423",
    //         contactNumber: "012355678",
    //     },
    //     {
    //         studentId: "2004013",
    //         studentName: "Pritha Saha",
    //         roomNumber: "520",
    //         contactNumber: "013355678",
    //     },
    //     {
    //         studentId: "2004014",
    //         studentName: "Adiba Fairooz",
    //         roomNumber: "520",
    //         contactNumber: "012355679",
    //     },
    //     {
    //         studentId: "2004015",
    //         studentName: "Walisa Alam",
    //         roomNumber: "424",
    //         contactNumber: "012352679",
    //     },
    //     {
    //         studentId: "2004016",
    //         studentName: "Rashme Akther",
    //         roomNumber: "424",
    //         contactNumber: "012355678",
    //     },
    //     {
    //         studentId: "2004017",
    //         studentName: "Nusrat Tazin",
    //         roomNumber: "424",
    //         contactNumber: "012355679",
    //     },
    //     {
    //         studentId: "2004020",
    //         studentName: "Nabila Tabassum",
    //         roomNumber: "520",
    //         contactNumber: "012355677",
    //     },
    //     {
    //         studentId: "2004023",
    //         studentName: "Arpita Mollik",
    //         roomNumber: "423",
    //         contactNumber: "012355577",
    //     },
    //     {
    //         studentId: "2004027",
    //         studentName: "Shiti Chowdhury",
    //         roomNumber: "520",
    //         contactNumber: "012355571",
    //     },
    //     {
    //         studentId: "2004027",
    //         studentName: "Shiti Chowdhury",
    //         roomNumber: "520",
    //         contactNumber: "012355571",
    //     },
    //     {
    //         studentId: "2004041",
    //         studentName: "Sidratul Muntaha",
    //         roomNumber: "208",
    //         contactNumber: "012355579",
    //     },
    //     {
    //         studentId: "2004044",
    //         studentName: "Raisa Nazifa",
    //         roomNumber: "218",
    //         contactNumber: "021355579",
    //     },
    //     {
    //         studentId: "2004045",
    //         studentName: "Habiba Akhter",
    //         roomNumber: "218",
    //         contactNumber: "013255579",
    //     },
    // ]
    const getStudentDetails = async () => {
        try {
          const result = await getAllUser()
          
          if (result.status === 'success') {
            
            setStudent_details(result.data);
            
          }
          toast.success('Fetching User Details successfully')
        } catch (error) {
          console.error(error);
          toast.error('Fetching User Details not successful')
        } 
    }
    // ✅ Logs state only when it updates
    useEffect(() => {
        console.log("Updated Student Details:", student_details);
    }, [student_details]);
  
  
    useEffect(() =>{
        getStudentDetails()
      },[])
    return ( 
        <div className="bg-red-2">
            <Card>
            <CardHeader>
                <CardTitle className='text-2xl'>All Student Details</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student ID</TableHead>
                            <TableHead>Student Name</TableHead>
                            <TableHead>Room Number</TableHead>
                            <TableHead>Contact Number</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        
                        {student_details.map((detail)=>(
                            <Dialog>
                                <DialogTrigger asChild>
                                    <TableRow key={detail.id}>
                                        <TableCell>{detail.id}</TableCell>
                                        <TableCell>{detail.username}</TableCell>
                                        <TableCell>{detail.room_no}</TableCell>
                                        <TableCell>{detail.contact_no}</TableCell>
                                    </TableRow>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Student Detail</DialogTitle>
                                        <DialogDescription>All Info Regarding the Student</DialogDescription>
                                        <div >
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm mr-2">Name :</div>
                                                <div className="text-sm">{detail.username}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm mr-2">ID :</div>
                                                <div className="text-sm">{detail.id}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm mr-2">Room Number :</div>
                                                <div className="text-sm">{detail.room_no}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="font-semibold text-sm mr-2">Contact :</div>
                                                <div className="text-sm">{detail.contact_no}</div>
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
export default UserDetailsCard