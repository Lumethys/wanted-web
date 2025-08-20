export const throwNuxtError = <DataT = unknown>(error: Parameters<typeof createError<DataT>>[0]): never => {
    throw createError(error);
}