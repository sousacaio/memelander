import { createClient } from 'redis';

export const cacheSet = async (key: string, value: any) => {
    const client = await createClient()
        .connect();
    await client.set(key, JSON.stringify(value));
};

export const cacheGet = async (key: string) => {
    const client = await createClient()
        .connect();
    const data: any = await client.get(key);
    return JSON.parse(data);
};