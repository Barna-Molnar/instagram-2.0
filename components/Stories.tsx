import { FC, useEffect } from 'react';
import faker from '@faker-js/faker';

export interface StoriesProps {
};

const Stories: FC<StoriesProps> = (props) => {


    useEffect(() => {
        const suggestion = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        console.log(suggestion)
    }, []);

    return (
        <div>


        </div>
    );
};

export default Stories;