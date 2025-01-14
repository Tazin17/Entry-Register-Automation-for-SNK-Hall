"use client"
import { Home, LogOut, MessageCircle, Moon, Video, Sun, Users, Menu, Bell} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu,DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem  } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage,AvatarFallback } from '@/components/ui/avatar'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useTheme } from "next-themes";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const {theme , setTheme} = useTheme('dark') ;
    console.log("Current theme:", theme);
    
    return (
        <header className = 'bg-white dark:bg-[rgb(36,37,38)] text-foreground shadow-md h-16 fixed top-0 left-0 right-0 z-50 p-2 '>
            <div className='mx-auto flex justify-between items-center p-2 '>
                <div>
                    <Button
                        variant = "ghost"
                        className="w-full h-70 justify-start hover:bg-transperant text-xl"
                        >
                         SNK Hall Entry
                    </Button>
                </div>
                <nav className='hidden md:flex justify-around w-[40%] max-w-md'>
                    {[
                        {icon: Home, path: "/", name: 'home'},
                        {icon: Video, path: "/video-feed", name: 'video'},
                        {icon: Users, path: "/friends-list", name: 'friends'}
                    ].map(({icon: Icon, path, name}) =>(
                        <Button 
                            key = {name}
                            variant = "ghost"
                            size = "icon"
                            className = 'relative text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-transparent '
                        >
                            <Icon/>
                        </Button>
                    ))}
                </nav>

                {/* user profile starts here*/}
                <div className='flex space-x-2 md:space-x-4 items-center'>
                    <Button variant = "ghost" size = "icon" className = "md:hidden text-gray-600 cursor-pointer block">
                        <Menu/>
                    </Button>
                    <Button variant = "ghost" size = "icon" className = "hidden md:block text-gray-600 cursor-pointer pl-1">
                        <Bell/>
                    </Button>
                    <Button variant = "ghost" size = "icon" className = "hidden md:block text-gray-600 cursor-pointer pl-1">
                        <MessageCircle/>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant = "ghost" className = 'relative h-8 w-8 rounded-full'>
                                <Avatar className="h-8 w-8 mr-2">
                                    <AvatarImage />
                                    <AvatarFallback>W</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className = 'w-64 z-50' align='end'>
                            <DropdownMenuLabel className='font-normal'>
                                <div className='flex flex-col space-y-1'>
                                    <div className='flex items-center'>
                                        <Avatar className='h-8 w-8 mr-2'>
                                            <AvatarImage />
                                            <AvatarFallback className='dark:bg-gray-400'>W</AvatarFallback>
                                        </Avatar>
                                        <div className=''>
                                            <p className='text-sm font-medium leading-none'>Walisa Alam</p>
                                            <p className='text-xs mt-2 text-gray-medium leading-none'>walisaalam810@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem className="cursor-pointer">
                                <Users/><span className='ml-2'>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <MessageCircle/><span className='ml-2'>Messeges</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={ ()=> setTheme(theme === 'dark' ? 'light': 'dark') } className="cursor-pointer">
                                {theme === 'light' ?(
                                    <>
                                    <Moon/>
                                    <span className='ml-2'>Dark Mode</span>
                                    </>
                                ):(
                                    <>
                                    <Sun/>
                                    <span className='ml-2'>Light Mode</span>
                                    </>
                                )}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <LogOut/><span className='ml-2'>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Header