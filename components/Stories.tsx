import { FC, useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import Story from './Story';

export interface StoriesProps {
};

interface Suggestion {
    name: string;
    username: string;
    avatar: string;
    email: string;
    dob: Date;
    phone: string;
    address: Address;
    website: string;
    company: Company;
    id: number;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}

const Stories: FC<StoriesProps> = (props) => {

    const [suggestions, setSuggestions] = useState<Array<Suggestion>>([])

    useEffect(() => {
        const fakeSuggestionsData = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
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