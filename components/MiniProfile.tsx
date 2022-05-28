import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const MiniProfile = () => {

    const session = useSession();

    return (
        <div className='flex items-center justify-between mt-14 ml-10 '>
            <img
                src={session.data?.user?.image!}
                alt="Profile image"
                className='rounded-full border p-[2px] w-16 h-16'
            />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>{session.data?.user?.username}</h2>
                <h3 className='text-sm text-gray-400'>Welcome to instagramm</h3>
            </div>
            <button
                className='font-semibold text-blue-400 text-sm'
                onClick={() => signOut()}
            >
                Sign Out
            </button>
        </div>
    )
}

export default MiniProfile