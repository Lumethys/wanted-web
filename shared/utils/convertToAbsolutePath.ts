export const convertToAbsolutePath = (path: string, base: string) =>
    path.includes('http') ? path : new URL(path, base).toString();