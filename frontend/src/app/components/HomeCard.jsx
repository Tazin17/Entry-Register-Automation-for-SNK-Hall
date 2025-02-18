import { Separator } from "@/components/ui/separator";
import { Circle } from "lucide-react";
const HomeCard = () => {

  // const getUserDataCount 
  return (
    <div className=" flex flex-col top-1/2 transform-translate-y-1/2 bg-[#D8E0E4] items-center px-12 pb-12 rounded-md shadow-md m-4">
      <div className="font-bold text-3xl py-6 dark:text-black">Presence</div>
      <div className="bg-white dark:text-black flex flex-col items-center space-y-16 mb-16 rounded-md p-4 shadow-md">
        <div className="font-bold text-3xl">Total</div>

        <div className="flex mx-20 space-x-40">
          <div className="flex flex-col">
            <div className="font-bold text-5xl" align="center">
              49
            </div>
            <Separator className="mt-4 w-28 bg-black" />
            <div className="text-gray-400 text-md" align="center">
              No of Staff
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-5xl" align="center">
              {" "}
              500
            </div>
            <Separator className="mt-4 w-28 bg-black" />
            <div className="text-gray-400 text-md" align="center">
              No of Students
            </div>
          </div>
        </div>
      </div>
      <div className=" relative bg-white dark:text-black flex flex-col items-center justify-center rounded-md p-4 shadow-md">
        <div className="absolute top-[10px] right-[10px] h-3 w-3 rounded-full bg-[rgb(74,232,106)]"></div>
        <div className="font-bold text-3xl pb-16">Current</div>
        <div className="flex mx-20 space-x-40">
          <div className="flex flex-col">
            <div className="font-bold text-5xl" align="center">
              23
            </div>
            <Separator className="mt-4 w-28 bg-black" />
            <div className="text-gray-400 text-md" align="center">
              No of Staff
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-5xl" align="center">
              434
            </div>
            <Separator className="mt-4 w-28 bg-black" />
            <div className="text-gray-400 text-md" align="center">
              No of Students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
