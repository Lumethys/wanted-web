import { getWantedList } from "~/data/wanted-posts";

export const useFetchWantedPosts = () => useAsyncData(
    'wanted-posts',
    () => getWantedList(),
    {
        transform: (wantedList) => wantedList.map(entry => ({
            id: entry.id,
            ...entry.wantedCriminal,
            reward: entry.reward,
            type: entry.type,
        })),
    },
)