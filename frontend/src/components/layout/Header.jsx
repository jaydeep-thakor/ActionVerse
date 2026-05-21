import { MapPin, Search } from 'lucide-react'
import React from 'react'
import { useAuthModal } from '../../context/AuthModalContext'

const Header = () => {

    const {openAuthModal} = useAuthModal();

    return (
        <header className='flex w-full items-center px-7 py-4 bg-black justify-between relative z-1'>

            <div className='flex gap-7 items-center'>
                <div className="flex items-center space-x-1 cursor-pointer max-md:justify-center">
                    <div className="">
                        <span className="text-white text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-marvel bg-primary pt-0.5 px-1">action</span>
                    </div>
                    <div><span className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-marvel text-white">verse</span>
                    </div>
                </div>

                <div className="w-px bg-white/20 self-stretch my-1" />

                <div className="flex items-center gap-1.5">

                    <MapPin size={18} color='#ec1d24' />

                    <div className='flex flex-col gap-0.5'>
                        <span className='text-sm font-medium leading-none text-white'>Gandhinagar</span>
                        <span className='text-[11px] leading-none font-medium text-gray-400'>Gujarat</span>
                    </div>

                </div>

            </div>

            <div className='flex gap-7 items-center'>
                <ul className='flex gap-5 justify-center'>
                    {["Home", "Shows", "Theaters", "Releases", "Favorites"].map((value, index) => {
                        const isActive = index === 0;
                        return (
                            <li
                                key={index}
                                className={`relative text-sm font-medium text-white cursor-pointer
          after:content-[''] after:absolute after:-bottom-1 after:left-1/2
          after:-translate-x-1/2 after:w-5 after:h-0.5 after:rounded-sm
          after:bg-[#c0170e] after:transition-opacity
          ${isActive ? 'after:opacity-100' : 'after:opacity-0'}`}
                            >
                                {value}
                            </li>
                        );
                    })}
                </ul>

                <div className='cursor-pointer'>
                    <Search size={18} color='white' />
                </div>

                <button onClick={openAuthModal} className='bg-primary text-white font-semibold text-sm px-3 py-1.5 rounded-sm hover:bg-primary-hover'>Book Now</button>

            </div>

        </header>
    )
}

export default Header


