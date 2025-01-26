import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { User, Users, BookUser, Send}  from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const LeftSideBar = () => {
    return (
        <aside className='bg-[#D8E0E4] fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-1200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0 '>
            <div className='flex flex-col h-full overflow-y-auto '>
                {/* navigation menu starts here */}
                <nav className='space-y-4 flex-grow'>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Avatar className='h-10 w-10'>
                           <AvatarImage/>
                            <AvatarFallback>P</AvatarFallback>
                        </Avatar>
                        <span className='font-semibold dark:text-black'>Provost</span>
                    </div>
                    
                    <Button
                    variant = "ghost"
                    className="w-full justify-start dark:text-black"
                    >
                        <BookUser className='mr-4'/> User Details
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start dark:text-black"
                    >
                        <Users className='mr-4'/> Late Students
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start dark:text-black"
                    >
                        <Send className='mr-4'/> Notice Submission
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start dark:text-black"
                    >
                        <User className='mr-4'/> Guest Entry
                    </Button>
                    
                    
                </nav>
                
                {/* footer section  */}
                <div className='mb-16 bottom-0'>
                    <Separator className='my-4'/>
                    <div className='flex flex-col items-center space-y-2 mb-4 cursor-pointer dark:text-black'>
                        
                        <span className='text-sm'>Shamshen Nahar Khan Hall,CUET</span>
                        <span className='text-sm'> Chattogram - 4349</span>
                        
                    </div>
                    
                </div>
            </div>
        </aside>
    )
}

export default LeftSideBar