export const useAbsoluteUrl = () => {
    const url = useRequestURL();
    const getAbsoluteUrl = (path: string) => convertToAbsolutePath(path, url.origin);

    return {
        getAbsoluteUrl,
    }
}