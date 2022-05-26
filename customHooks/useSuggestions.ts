import faker from "@faker-js/faker";
import { useEffect, useState } from "react";

interface SuggestionsData {
    username: string;
    avatar: string;
    companyName: string;
    id: number;
}

export const useUsers = (numberOfSuggestion: number) => {

    const [suggestedUsers, setSuggestedUsers] = useState<Array<SuggestionsData>>([])

    console.log(suggestedUsers)
    useEffect(() => {
        const fakeSuggestionsData = [...Array(numberOfSuggestion)].map((_, i) => ({
            username: faker.name.findName(),
            avatar: faker.image.avatar(),
            companyName: faker.company.companyName(),
            id: i
        }))
        setSuggestedUsers(fakeSuggestionsData)

    }, []);

    return { suggestedUsers }
}