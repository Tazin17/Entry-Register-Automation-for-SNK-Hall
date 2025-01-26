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
// import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  // const router = useRouter();
  const handleNavigation = (path, item) => {
    router.push(path);
  };

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
                    <div className="space-y-2">
                      <Label htmlFor="loginEmail">Email</Label>
                      <Input
                        id="loginEmail"
                        name="email"
                        type="email"
                        {...registerLogin("email")}
                        placeholder="Enter your email"
                        className="col-span-3 dark:border-gray-400"
                      />
                      {errorsLogin.email && (
                        <p className="text-red-500">
                          {errorsLogin.email.message}
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
                    <Button
                      className="w-full"
                      type="submit"
                    //   onClick={() => handleNavigation("/components")}
                    >
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
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="loginEmail">Email</Label>
                        <Input
                          id="loginEmail"
                          name="email"
                          type="email"
                          {...registerLogin("email")}
                          placeholder="Enter your email"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsLogin.email && (
                          <p className="text-red-500">
                            {errorsLogin.email.message}
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
                    </div>
                  </div>

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
