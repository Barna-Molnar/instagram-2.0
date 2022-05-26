import React, { FC } from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

interface PostProps {
    id: string;
    username: string;
    userImg: string;
    img: string;
    caption: string;

}
const Post = ({ id, username, userImg, caption, img }: PostProps) => {
    return (
        <div className='bg-white my-7 border rounde-sm'>
            {/* Header */}
            <div className="flex items-center p-5">
                <img
                    src={userImg}
                    alt="User img"
                    className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                />
                <p className="font-bold flex-1">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>
            {/* img */}
            <img src={img} alt="" className='object-cover w-full' />


            {/* Button */}
            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>
                <BookmarkIcon className='btn' />
            </div>
            {/* caption */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{username} </span>{caption}

            </p>

            {/* comments */}

            {/* inputBox */}
            <form className='flex item p-4 items-center'>
                <EmojiHappyIcon className='btn' />
                <input
                    type="text"
                    placeholder='Comment...'
                    className='border-none flex-1 focus:ring-0 outline-none'
                />
                <button className='font-semibold text-blue-400 '>Post</button>

            </form>

        </div>
    )
}

export default Post