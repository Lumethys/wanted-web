import {throwNuxtError} from "~/utils/throwNuxtError";
import type {CrimeType, CurrencyType} from "#shared/types/wanted-model.d";
import {Crime, Currency} from "#shared/utils/wanted-model";

export type WantedType = 'dead' | 'alive' | 'both';

export type Reward = {
    amount: number;
    currency: CurrencyType;
};

export type Criminal = {
    name: string;
    imageSrc?: string;
};

export type WantedEntry = {
    id: number,
    reward: Reward;
    wantedCriminal: Required<Criminal>;
    accomplices: Criminal[];
    reasons: CrimeType[];
    type: WantedType;
};

const data: WantedEntry[] = [
    {
        id: 1,
        reward: {
            amount: 10000,
            currency: Currency.SILVER_COIN,
        },
        wantedCriminal: {
            name: 'John Doe',
            imageSrc: 'images/criminal-1.png',
        },
        accomplices: [
            {
                name: 'Jane Doe',
            },
            {
                name: 'Billy Doe',
            },
        ],
        reasons: [Crime.BANK_ROBBING, Crime.ASSAULT, Crime.BATTERY],
        type: 'both',
    },
    {
        id: 2,
        reward: {
            amount: 9000,
            currency: Currency.SILVER_COIN,
        },
        wantedCriminal: {
            name: 'Marcus Langworth',
            imageSrc: 'images/criminal-2.png',
        },
        accomplices: [],
        reasons: [Crime.STEALING, Crime.PICKPOCKETING],
        type: 'both',
    },
    {
        id: 3,
        reward: {
            amount: 200,
            currency: Currency.GOLD_COIN,
        },
        wantedCriminal: {
            name: 'Wikazo Shifar',
            imageSrc: 'images/criminal-3.png',
        },
        accomplices: [],
        reasons: [Crime.MURDER, Crime.KIDNAPPING],
        type: 'alive',
    },
    {
        id: 4,
        reward: {
            amount: 700,
            currency: Currency.GOLD_COIN,
        },
        wantedCriminal: {
            name: 'Balara de Wulzic',
            imageSrc: 'images/criminal-7.png',
        },
        accomplices: [],
        reasons: [Crime.MURDER, Crime.KIDNAPPING],
        type: 'dead',
    },
    {
        id: 5,
        reward: {
            amount: 230,
            currency: Currency.GOLD_COIN,
        },
        wantedCriminal: {
            name: 'Wandi Wong',
            imageSrc: 'images/criminal-5.png',
        },
        accomplices: [
            {
                name: 'Jane Doe',
                imageSrc: 'images/criminal-4.png',
            },
            {
                name: 'Billy Doe',
                imageSrc: 'images/criminal-6.png',
            },
        ],
        reasons: [Crime.MURDER, Crime.KIDNAPPING],
        type: 'alive',
    },
    {
        id: 6,
        reward: {
            amount: 2000,
            currency: Currency.GOLD_COIN,
        },
        wantedCriminal: {
            name: 'Williams "the Butcher" Song',
            imageSrc: 'images/criminal-9.png',
        },
        accomplices: [],
        reasons: [Crime.MURDER, Crime.KIDNAPPING],
        type: 'both',
    },
];

export const getWantedList = async (): Promise<WantedEntry[]> => data

export const getWantedEntry = async (
    id: WantedEntry['id']
): Promise<WantedEntry> => data.find((entry) => entry.id === id) ?? throwNuxtError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true, // Crucial for proper error handling
});