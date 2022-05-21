import React, { FC } from 'react'

interface Story {
    img: string;
    username: string;
}

const Story: FC<Story> = (props) => {
    return (
        <div className='h-20 rounded-full'>
            <img src={props.img} alt="Personal Info" className='h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' />
            <p className='text-sm w-14 truncate text-center'>{props.username}</p>
        </div>
    )
}

export default Story