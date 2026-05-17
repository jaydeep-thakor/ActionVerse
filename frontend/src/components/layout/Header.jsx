import { MapPin, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='absolute top-0 flex w-full items-center bg-black px-5 py-5'>

            <div className='flex-1 flex gap-10'>
                <div className="flex items-center space-x-1 cursor-pointer max-md:justify-center">
                    <div className="">
                        <span className="text-white text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-marvel bg-primary pt-[2px] px-1">action</span>
                    </div>
                    <div><span className="text-white text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-marvel">verse</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">

                    <MapPin color="white" />

                    <div className='flex flex-col gap-1'>
                        <span className='text-white text-md leading-[1]'>Gandhinagar</span>
                        <span className='text-gray-400 text-xs leading-[1]'>Gujarat</span>
                    </div>

                </div>

            </div>

            <ul className='flex-1 flex text-white gap-5 justify-center'>
                {
                    ["Home", "Shows", "Theaters", "Releases", "Favorites"].map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>

            <div className='flex-1 flex justify-end'>
                <Search color='white'/>
                
            </div>

        </div>
    )
}

export default Header