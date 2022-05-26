import React from 'react'
import { useUsers } from '../customHooks/useSuggestions'

const Suggestions = () => {

    const { suggestedUsers } = useUsers(5)

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestion for you</h3>
                <button className='font-semibold text-gray-600'>See All</button>
            </div>
            {
                suggestedUsers.map((user) => (
                    <div
                        key={user.id}
                        className='flex items-center justify-between mt-3'
                    >
                        <img
                            src={user.avatar}
                            alt="Avatar icon"
                            className='rounded-full w-10 h-10 p-[2px]'
                        />
                        <div className='flex-1 ml-4'>
                            <h2 className='text-sm font-semibold'>
                                {user.username}
                            </h2>
                            <h3 className='text-xs text-gray-400'>Works at: {user.companyName}</h3>
                        </div>
                        <button className='text-xs text-blue-400 font-bold'>Follow</button>


                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions