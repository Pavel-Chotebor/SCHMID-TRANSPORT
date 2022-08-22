import useSWR from "swr"

export interface ApiState {
    data: any;
    loading: boolean;
    error: any
}

export const useTransportData = (isFetching:boolean):ApiState => {
    const fetcher = () => fetch("https://api.agify.io?name=meelad").then(res => res.json())
    const { data, error } = useSWR(isFetching ? "TEST" : null, fetcher)
    console.log("submit form ", data)
    console.log("isFetching ",isFetching)


    return {
        data,
        loading: isFetching && !error && !data,
        error,
    }
}