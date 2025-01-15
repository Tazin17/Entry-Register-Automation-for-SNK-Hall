const HomeCard = () => {
    return (
        <div className="relative flex flex-col top-20 bg-[#D8E0E4] items-center p-20 rounded-md shadow-md">
            <div className='bg-white flex flex-col items-center space-y-16 mb-20 rounded-md p-4 shadow-md'>
                        
                <div className="font-bold text-3xl">Total</div>

                <div className="flex mx-20 space-x-40">
                    <div className="font-bold text-xl">Staff: 49</div>
                    <div className="font-bold text-xl">Students: 500</div>
                </div>
                        
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <div className='bg-white flex flex-col items-center space-y-16 mb-4 rounded-md p-4 shadow-md'>
                        <div className="font-bold text-3xl ">Current</div>
        
                        <div className="flex mx-20 space-x-40">
                            <div className="font-bold text-xl">Staff: 49</div>
                            <div className="font-bold text-xl">Students: 500</div>
                        </div>     
                    </div>        
                    
                </div>
        </div>
    )
}

export default HomeCard