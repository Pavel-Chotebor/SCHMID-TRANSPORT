import useSWR from "swr"

export interface ApiState {
    data: any;
    loading: boolean;
    error: any
}

export const useTestData = ():ApiState => {
    const fetcher = () => fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(res => res.json())
    const { data, error,mutate } = useSWR("TEST2", fetcher)

    return {
        data,
        loading: !error && !data,
        error,
    }
}