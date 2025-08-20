import { getWantedEntry } from "~/data/wanted-posts";

export const useFetchWantedEntry = (id: MaybeRefOrGetter<number>) => {
    const queryKey = computed<string>(() => `wanted-entry-${toValue(id)}`);
    const queryFunction = () => getWantedEntry(toValue(id));

    return useAsyncData(
        queryKey,
        queryFunction,
    )
}