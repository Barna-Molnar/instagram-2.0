import { FC, useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import Story from './Story';
import { useUsers } from '../customHooks/useSuggestions';

export interface StoriesProps { };

const Stories: FC<StoriesProps> = (props) => {

    const { suggestedUsers } = useUsers(20)

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
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