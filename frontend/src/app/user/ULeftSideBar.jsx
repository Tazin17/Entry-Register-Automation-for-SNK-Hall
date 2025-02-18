import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { User, Users, BookUser, Send}  from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useRouter } from "next/navigation";
import userStore from '@/store/userStore';
const ULeftSideBar = () => {
    const router = useRouter();
    const {user, clearUser} = userStore();
      const handleNavigation = (path) => {
        router.push(path);
      };
    return (
        <aside className='bg-[#D8E0E4] fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-1200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0'>
            <div className='flex flex-col h-full overflow-y-auto dark:text-black'>
                {/* navigation menu starts here */}
                <nav className='space-y-4 flex-grow'>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Avatar className='h-10 w-10'>
                           <AvatarImage/>
                            <AvatarFallback className="dark:bg-gray-600">{user?.username}</AvatarFallback>
                        </Avatar>
                        <span className='font-semibold'>{user?.username}</span>
                    </div>
                    
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    onClick={()=>handleNavigation('/temporary-leave')}
                    >
                        <BookUser className='mr-4'/> Notify Leave
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    onClick={()=>handleNavigation('/user-table')}
                    >
                        <Users className='mr-4'/> Late Frequency
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    >
                        <Send className='mr-4'/> Notice
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    onClick={()=>handleNavigation('/guest-request')}
                    >
                        <User className='mr-4'/> Guest Request
                    </Button>
                    
                    
                </nav>
                
                {/* footer section  */}
                <div className='mb-16 bottom-0'>
                    <Separator className='my-4'/>
                    <div className='flex flex-col items-center space-y-2 mb-4 cursor-pointer'>
                        
                        <span className='text-sm'>Shamshen Nahar Khan Hall,CUET</span>
                        <span className='text-sm'> Chattogram - 4349</span>
                        
                    </div>
                    
                </div>
            </div>
        </aside>
    )
}

export default ULeftSideBar