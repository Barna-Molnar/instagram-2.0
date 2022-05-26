import faker from "@faker-js/faker";
import { useEffect, useState } from "react";

interface SuggestionsData {
    username: string;
    avatar: string;
    id: number;
}

export const useUsers = (numberOfSuggestion: number) => {

    const [suggestedUsers, setSuggestedUsers] = useState<Array<SuggestionsData>>([])

    useEffect(() => {
        const fakeSuggestionsData = [...Array(numberOfSuggestion)].map((_, i) => ({
            username: faker.name.findName(),
            avatar: faker.image.avatar(),
            id: i
        }))
        setSuggestedUsers(fakeSuggestionsData)

    }, []);

    return { suggestedUsers }
}