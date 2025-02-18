"use client";
import React, { useState, useEffect} from "react";
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
import { loginUser, registerUser } from "../../service/auth.service"
import toast from "react-hot-toast";


// import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
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
    contact_no: yup
      .string()
      .matches(/^[0-9]{11}$/, "Contact number must be exactly 11 digits")
      .required("Contact number is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Password is required"),
    id: yup.string().required("Student ID is required"),
  });
  const loginSchema = yup.object().shape({
    id: yup
      .string()
      .required("ID is required"),
    password: yup
      .string()
      .min(3, "Password must be at least 6 characters")
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

  const onSubmitRegister = async (data) => {
    try {
      const result = await registerUser(data)
      if (result.status === 'success') {
        router.push('/')
      }
      toast.success('User register successfully')
    } catch (error) {
      console.error(error);
      toast.error('Student ID already exist')
    } 
  }
  //reset the form
  useEffect(() => {
    resetLoginForm();
    resetSignUpForm();
  }, [resetLoginForm, resetSignUpForm])

  const onSubmitLogin = async (data) => {
    try {
      const result = await loginUser(data)
      if (result.status === 'success') {
        if( result.data?.id?.startsWith('admin')){
          router.push('/user-details')
        }
        else router.push('/user')
      }
      toast.success('User login successfully')
    } catch (error) {
      console.error(error);
      toast.error('Invalid ID or Password')
    } 
  }

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
                <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="loginId">ID</Label>
                      <Input
                        id="loginId"
                        name="id"
                        type="text"
                        {...registerLogin("id")}
                        placeholder="Enter your ID"
                        className="col-span-3 dark:border-gray-400"
                      />
                      {errorsLogin.id && (
                        <p className="text-red-500">
                          {errorsLogin.id.message}
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

              <TabsContent value="signup" >
                <form onSubmit={handleSubmitSignUp(onSubmitRegister)}> 
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
                        <Label htmlFor="signupStudentId">Student ID</Label>
                        <Input
                          id="signupStudentId"
                          name="id"
                          type="text" // Use text for alphanumeric or IDs with leading zeros
                          {...registerSignUp("id")}
                          placeholder="Enter your Student ID"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsLogin.id && (
                          <p className="text-red-500">
                            {errorsLogin.id.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactno">Contact No.</Label>
                        <Input
                          id="contactno"
                          name="contact_no"
                          type="text" 
                          placeholder="Enter your Contact No."
                          className="col-span-3 dark:border-gray-400 "
                          {...registerSignUp("contact_no")} // Update the field name accordingly
                        />
                        {errorsLogin.contact_no && (
                          <p className="text-red-500">
                            {errorsLogin.contact_no.message}
                          </p>
                        )}
                      </div>

                      </div>
                      <div className="space-y-4">
                    
                      <div className="space-y-2">
                        <Label htmlFor="signupEmail">Email</Label>
                        <Input
                          id="signupEmail"
                          name="email"
                          type="email"
                          {...registerSignUp("email")}
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
                        <Label htmlFor="signupPassword">Password</Label>
                        <Input
                          id="signupPassword"
                          name="password"
                          type="password"
                          {...registerSignUp("password")}
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
                        <Label htmlFor="signupconfirmPassword">Confirm Password</Label>
                        <Input
                          id="signupconfirmPassword"
                          name="confirmPassword"
                          type="password"
                          {...registerSignUp("confirmPassword")}
                          placeholder="Re-Enter your Password"
                          className="col-span-3 dark:border-gray-400"
                        />
                        {errorsLogin.confirmPassword && (
                          <p className="text-red-500">
                            {errorsLogin.confirmPassword.message}
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
