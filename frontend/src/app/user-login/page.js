"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const page = () => {
  const router = useRouter();

  // Validation schema for Sign-Up
  const registerSchema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    dateOfBirth: yup.date().required("Birth date is required"),
    gender: yup
      .string()
      .oneOf(["male", "female", "other"], "Please select a gender")
      .required("Gender is required"),
    studentId: yup.string().required("Student ID is required"),
    department: yup.string().required("Department is required"),
    isAlumni: yup
      .string()
      .required("Please select if you are a student or alumni"),
    batch: yup.string().when("isAlumni", {
      is: "alumni",
      then: yup.string().required("Batch is required for alumni"),
    }),
    graduationYear: yup.string().when("isAlumni", {
      is: "alumni",
      then: yup.string().required("Graduation year is required for alumni"),
    }),
  });
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    reset: resetLoginForm,
    formState: { errors: errorsLogin },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    reset: resetSignUpForm,
    formState: { errors: errorsSignUp },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [isAlumni, setIsAlumni] = useState(false);

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-900 flex items-center justify-center p-2 ">
    <div
      div
      className="min-h-screen bg-gradient-to-br from-[rgb(81,51,164)] to-[rgb(59,148,102)] flex items-center justify-center p-2"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md dark:text-white mt-7">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              <span>SNK Hall Entry</span>
            </CardTitle>
            <CardDescription className="text-center">
              To ensure a secure automation hall entry system for SNK Hall!
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form>
                  <div className="space-y-4">
                    {/* <div className="space-y-2">
                      <Label htmlFor="loginEmail">Student ID</Label>
                      <Input
                        id="studentid"
                        name="std_id"
                        type="number"
                        {...registerLogin("number")}
                        placeholder="Enter your Student ID"
                        className="col-span-3 dark:border-gray-400"
                      />
                      {errorsLogin.number && (
                        <p className="text-red-500">
                          {errorsLogin.email.message}
                        </p>
                      )}
                    </div> */}
                    <div className="space-y-2">
                      <Label htmlFor="studentid">Student ID</Label>
                      <Input
                        id="studentid"
                        name="std_id"
                        type="text" // Use text for alphanumeric or IDs with leading zeros
                        {...registerLogin("std_id")}
                        placeholder="Enter your Student ID"
                        className="col-span-3 dark:border-gray-400"
                      />
                      {errorsLogin.std_id && (
                        <p className="text-red-500">
                          {errorsLogin.std_id.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="loginPassword">Password</Label>
                      <Input
                        id="loginPassword"
                        name="password"
                        type="password"
                        {...registerLogin("password")}
                        placeholder="Enter your Password"
                        className="col-span-3 dark:border-gray-400"
                      />
                      {errorsLogin.password && (
                        <p className="text-red-500">
                          {errorsLogin.password.message}
                        </p>
                      )}
                    </div>
                    <Button className="w-full" type="submit">
                      <LogIn className="mr-2 w-4 h-4" /> Log in
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-500">
                <form>
                  <div className="grid grid-cols-2 gap-6">
                    {/* <div className="space-y-4"> */}
                    {/* Column 1 */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signupName">Full Name</Label>
                        <Input
                          id="signupName"
                          name="username"
                          type="text"
                          {...registerSignUp("username")}
                          placeholder="Enter your Full Name"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsSignUp.username && (
                          <p className="text-red-500">
                            {errorsSignUp.username.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentid">Student ID</Label>
                        <Input
                          id="studentid"
                          name="std_id"
                          type="text" // Use text for alphanumeric or IDs with leading zeros
                          {...registerLogin("std_id")}
                          placeholder="Enter your Student ID"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsLogin.std_id && (
                          <p className="text-red-500">
                            {errorsLogin.std_id.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactno">Contact No.</Label>
                        <Input
                          id="contactno"
                          name="contact_no"
                          type="tel" // Use tel for phone numbers
                          placeholder="Enter your Contact No."
                          className="col-span-3 dark:border-gray-400 "
                          {...registerLogin("contact_no")} // Update the field name accordingly
                        />
                        {errorsLogin.contact_no && (
                          <p className="text-red-500">
                            {errorsLogin.contact_no.message}
                          </p>
                        )}
                      </div>

                      {/* 
                      <div className="space-y-2">
                        <Label htmlFor="signupGender">Gender</Label>
                        <select
                          id="signupGender"
                          name="gender"
                          {...registerSignUp("gender")}
                          className="w-full border dark:border-gray-400 rounded-md px-3 py-2"
                        >
                          <option value="">Select your gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {errorsSignUp.gender && (
                          <p className="text-red-500">
                            {errorsSignUp.gender.message}
                          </p>
                        )}
                      </div> */}

                      {/* <div className="space-y-2">
                        <Label htmlFor="signupEmail">Email</Label>
                        <Input
                          id="signupEmail"
                          name="email"
                          type="email"
                          {...registerSignUp("email")}
                          placeholder="Enter your email"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsSignUp.email && (
                          <p className="text-red-500">
                            {errorsSignUp.email.message}
                          </p>
                        )}
                      </div> */}
                    </div>

                    {/* Column 2 */}

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="loginPassword">Password</Label>
                        <Input
                          id="loginPassword"
                          name="password"
                          type="password"
                          {...registerLogin("password")}
                          placeholder="Enter your Password"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsLogin.password && (
                          <p className="text-red-500">
                            {errorsLogin.password.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="loginPassword">Confirm Password</Label>
                        <Input
                          id="CloginPassword"
                          name="Cpassword"
                          type="password"
                          {...registerLogin("Cpassword")}
                          placeholder="Re-Enter your Password"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsLogin.Cpassword && (
                          <p className="text-red-500">
                            {errorsLogin.Cpassword.message}
                          </p>
                        )}
                      </div>
                      {/* <div className="space-y-2">
                        <Label htmlFor="signupPassword">Password</Label>
                        <Input
                          id="signupPassword"
                          name="password"
                          type="password"
                          {...registerSignUp("password")}
                          placeholder="Enter your Password"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsSignUp.password && (
                          <p className="text-red-500">
                            {errorsSignUp.password.message}
                          </p>
                        )}
                      </div> */}

                      {/* <div className="space-y-2">
                        <Label htmlFor="signupStudentId">Student ID</Label>
                        <Input
                          id="signupStudentId"
                          name="studentId"
                          type="text"
                          {...registerSignUp("studentId")}
                          placeholder="Enter your Student ID"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsSignUp.studentId && (
                          <p className="text-red-500">
                            {errorsSignUp.studentId.message}
                          </p>
                        )}
                      </div> */}
                      {/* 
                      <div className="space-y-2">
                        <Label htmlFor="signupDepartment">Department</Label>
                        <Select
                          id="signupDepartment"
                          {...registerSignUp("department")}
                          className="w-full"
                        >
                          <SelectTrigger placeholder="Select Department">
                            <SelectContent>
                              <SelectItem value="CE">CE</SelectItem>
                              <SelectItem value="EEE">EEE</SelectItem>
                              <SelectItem value="ME">ME</SelectItem>
                              <SelectItem value="CSE">CSE</SelectItem>
                              <SelectItem value="URP">URP</SelectItem>
                              <SelectItem value="ARCHI">ARCHI</SelectItem>
                              <SelectItem value="PME">PME</SelectItem>
                              <SelectItem value="ETE">ETE</SelectItem>
                              <SelectItem value="MIE">MIE</SelectItem>
                              <SelectItem value="WRE">WRE</SelectItem>
                              <SelectItem value="BME">BME</SelectItem>
                              <SelectItem value="MSE">MSE</SelectItem>
                            </SelectContent>
                          </SelectTrigger>
                        </Select>
                        {errorsSignUp.department && (
                          <p className="text-red-500">
                            {errorsSignUp.department.message}
                          </p>
                        )}
                      </div> */}

                      {/* <div className="space-y-2">
          <Label htmlFor="signupDepartment">Department</Label>
          <Select
            id="signupDepartment"
            {...registerSignUp("department")}
            className="w-full"
          >
            <SelectTrigger placeholder="Select Department">
              <SelectContent>
                <SelectItem value="CSE">CE</SelectItem>
                <SelectItem value="EEE">EEE</SelectItem>
                <SelectItem value="ME">ME</SelectItem>
                <SelectItem value="CE">CSE</SelectItem>
                <SelectItem value="CE">URP</SelectItem>
                <SelectItem value="CE">ARCHI</SelectItem>
                <SelectItem value="CE">PME</SelectItem>
                <SelectItem value="CE">ETE</SelectItem>
                <SelectItem value="CE">MIE</SelectItem>
                <SelectItem value="CE">WRE</SelectItem>
                <SelectItem value="CE">BME</SelectItem>
                <SelectItem value="CE">MSE</SelectItem>
              </SelectContent>
            </SelectTrigger>
          </Select>
          {errorsSignUp.department && (
            <p className="text-red-500">{errorsSignUp.department.message}</p>
          )}
        </div> */}
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <Label>Status</Label>
                    <RadioGroup
                      className="flex justify-between"
                      {...registerSignUp("status")}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="current" id="current" />
                        <Label htmlFor="current">Current Student</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="hallAuthority"
                          id="hallAuthority"
                        />
                        <Label htmlFor="hallAuthority">Hall Authority</Label>
                      </div>
                    </RadioGroup>
                    {errorsSignUp.status && (
                      <p className="text-red-500">
                        {errorsSignUp.status.message}
                      </p>
                    )}
                  </div>

                  {/* 
                  <div className="space-y-4 mt-6">
                    <Label>Status</Label>
                    <RadioGroup
                      className="flex justify-between"
                      {...registerSignUp("status")}
                      onValueChange={(value) => setIsAlumni(value === "alumni")}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="current" id="current" />
                        <Label htmlFor="current">Current Student</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alumni" id="alumni" />
                        <Label htmlFor="alumni">Hall Authority</Label>
                      </div>
                    </RadioGroup>
                    {errorsSignUp.isAlumni && (
                      <p className="text-red-500">
                        {errorsSignUp.isAlumni.message}
                      </p>
                    )}
                  </div>

                  {isAlumni && (
                    <Dialog open={isAlumni} onOpenChange={setIsAlumni}>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Alumni Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="batch">Batch</Label>
                            <Input
                              id="batch"
                              name="batch"
                              type="text"
                              {...registerSignUp("batch")}
                              placeholder="Enter your batch"
                            />
                            {errorsSignUp.batch && (
                              <p className="text-red-500">
                                {errorsSignUp.batch.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="graduationYear">
                              Graduation Year
                            </Label>
                            <Input
                              id="graduationYear"
                              name="graduationYear"
                              type="text"
                              {...registerSignUp("graduationYear")}
                              placeholder="Enter your graduation year"
                            />
                            {errorsSignUp.graduationYear && (
                              <p className="text-red-500">
                                {errorsSignUp.graduationYear.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )} */}

                  <Button className="w-full mt-6" type="submit">
                    <LogIn className="mr-2 w-4 h-4" /> Sign Up
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default page;
