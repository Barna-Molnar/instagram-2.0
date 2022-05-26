import React from 'react'

const MiniProfile = () => {
    return (
        <div className='flex items-center justify-between mt-14 ml-10 '>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFlfLM1b6ZQRQ/profile-displayphoto-shrink_200_200/0/1605088697876?e=1657152000&v=beta&t=AFl2DdQFWDilFk9Ii4W3hBZeLOa3KgbHGzWotmT72sc"
                alt="Profile image"
                className='rounded-full border p-[2px] w-16 h-16'
            />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>Barni Barni</h2>
                <h3 className='text-sm text-gray-400'>Welcome to instagramm</h3>
            </div>
            <button className='font-semibold text-blue-400 text-sm'>Sign Out</button>
        </div>
    )
}

export default MiniProfile