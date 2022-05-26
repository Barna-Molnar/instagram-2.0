import { FC, useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import Story from './Story';

export interface StoriesProps {
};
interface SuggestionsData {
    username: string;
    avatar: string;
    id: number;
}

const Stories: FC<StoriesProps> = (props) => {

    const [suggestions, setSuggestions] = useState<Array<SuggestionsData>>([])

    console.log(suggestions);
    useEffect(() => {
        const fakeSuggestionsData = [...Array(20)].map((_, i) => ({
            username: faker.name.findName(),
            avatar: faker.image.avatar(),
            id: i
        }))
        setSuggestions(fakeSuggestionsData)


    }, []);

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {suggestions?.map((profile, index) => (
                <Story
                    key={index}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    );
};

export default Stories;