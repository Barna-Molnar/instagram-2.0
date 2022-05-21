import Image from 'next/image';
import { FC } from 'react';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline'

import { HomeIcon } from '@heroicons/react/solid';

export interface HeaderProps { };


const Header: FC<HeaderProps> = (props) => {

    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto'>

                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image
                        src='https://links.papareact.com/ocw'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='relative inline-grid lg:hidden flex-shrink-0 w-10 cursor-pointer'>
                    <Image
                        src='https://links.papareact.com/jjm'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input
                            className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
                            type="text"
                            placeholder='Search'
                        />
                    </div>
                </div>
                <div className='flex items-center justify-end space-x-4'>
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />
                    <HomeIcon className='navBtn' />
                    <div className='relative navBtn'>
                        <div className='absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                        <PaperAirplaneIcon className='navBtn' />
                    </div>
                    <PlusCircleIcon className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFlfLM1b6ZQRQ/profile-displayphoto-shrink_200_200/0/1605088697876?e=1657152000&v=beta&t=AFl2DdQFWDilFk9Ii4W3hBZeLOa3KgbHGzWotmT72sc" alt="image" className='h-10 rounded-full cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Header;