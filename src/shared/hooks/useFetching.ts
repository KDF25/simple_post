import { useState } from "react";

type FetchingFunction = () => Promise<void>;

export const useFetching = (callback: FetchingFunction): [FetchingFunction, boolean, string] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetching: FetchingFunction = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e: any) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error];
};
