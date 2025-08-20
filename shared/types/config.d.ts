export type Config<TKey extends string, TValue> = {
    [K in TKey]: TValue;
};