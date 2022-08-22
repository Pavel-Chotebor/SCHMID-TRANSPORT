import useSWR from "swr"

export interface ApiState {
    data: any;
    loading: boolean;
    error: any
}

export const useTestData = (): ApiState => {
    const fetcher = () => fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(res => res.json())
    const {data, error} = useSWR("TEST2", fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
        //revalidateIfStale: false
    })
    console.log("data fetch ", data)

    return {
        data,
        loading: !error && !data,
        error,
    }
}