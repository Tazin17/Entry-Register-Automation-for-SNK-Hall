
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, Users, BookUser, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
const LeftSideBar = ({ setIsFormVisible }) => {
  const router=useRouter();
  const handleNavigation = (path,item)=>{
      router.push(path);
    };
  return (
    <aside className="bg-[#D8E0E4] fixed top-16 left-0 h-full w-64 p-4 flex flex-col z-50">
      <div className="flex flex-col h-full overflow-y-auto">
        <nav className="space-y-4 flex-grow">
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarImage />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <span className="font-semibold dark:text-black">Provost</span>
          </div>

          <Button
            variant="ghost"
            className="w-full justify-start dark:text-black dark:hover:bg-gray-400"
                onClick={()=>handleNavigation('/late-students')}
          >
            <BookUser className="mr-4" /> Student Details
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start dark:text-black dark:hover:bg-gray-400"
            onClick={()=>handleNavigation('/late-students')}
          >
            <Users className="mr-4" /> Late Students
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start dark:text-black dark:hover:bg-gray-400"
            onClick={()=>handleNavigation('/notice-submission')}
          >
            <Send className="mr-4" /> Notice Submission
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start dark:text-black dark:hover:bg-gray-400"
            onClick={()=>handleNavigation('/guest-entry')}
          >
            <User className="mr-4" /> Guest Entry
          </Button>
        </nav>

        <div className="mb-16 bottom-0">
          <Separator className="my-4" />
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Shamshen Nahar Khan Hall, CUET</span>
            <span className="text-sm">Chattogram - 4349</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSideBar;
