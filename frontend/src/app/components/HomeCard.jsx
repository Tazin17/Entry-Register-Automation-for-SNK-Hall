import { Separator } from '@/components/ui/separator';

const HomeCard = () => {
    return (
        <div className=" flex flex-col top-1/2 transform-translate-y-1/2 bg-[#D8E0E4] items-center p-16 rounded-md shadow-md m-8">
            <div className='bg-white dark:text-black flex flex-col items-center space-y-16 mb-16 rounded-md p-4 shadow-md'>
                        
                <div className="font-bold text-3xl">Total</div>

                <div className="flex mx-20 space-x-40">
                    <div className='flex flex-col'>
                        <div className="font-bold text-5xl" align="center">49</div>
                        <Separator className="mt-4 w-28 bg-black"/>
                        <div className='text-gray-400 text-md' align="center">No of Staff</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-bold text-5xl" align="center"> 500</div>
                        <Separator className="mt-4 w-28 bg-black"/>
                        <div className='text-gray-400 text-md' align="center">No of Students</div>
                    </div>
                </div>           
            </div>
            <div className='bg-white dark:text-black flex flex-col items-center space-y-16 rounded-md p-4 shadow-md'>
                        
                <div className="font-bold text-3xl">Current</div>

                <div className="flex mx-20 space-x-40">
                    <div className='flex flex-col'>
                        <div className="font-bold text-5xl" align="center">23</div>
                        <Separator className="mt-4 w-28 bg-black"/>
                        <div className='text-gray-400 text-md' align="center">No of Staff</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-bold text-5xl" align="center"> 434</div>
                        <Separator className="mt-4 w-28 bg-black"/>
                        <div className='text-gray-400 text-md' align="center">No of Students</div>
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default HomeCard