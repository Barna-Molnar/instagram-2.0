import { FC, useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import Story from './Story';
import { useUsers } from '../customHooks/useSuggestions';
import { useSession } from 'next-auth/react';

export interface StoriesProps { };

const Stories: FC<StoriesProps> = (props) => {

    const { suggestedUsers } = useUsers(20)
    const { data: session } = useSession()

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {
                session && (
                    <Story
                        img={session.user.image!}
                        username={session.user.username!}
                    />
                )
            }
            {suggestedUsers?.map((user, index) => (
                <Story
                    key={index}
                    img={user.avatar}
                    username={user.username}
                />
            ))}
        </div>
    );
};

export default Stories;