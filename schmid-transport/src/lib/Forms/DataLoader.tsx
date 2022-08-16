import {ApiState} from "../api/useTrasnportData";
import {CircularProgress} from "@mui/material";

interface DataLoaderProps {
    apiState: ApiState
    renderSuccess: JSX.Element
    content: JSX.Element
}

export const DataLoader = ({apiState, renderSuccess, content}: DataLoaderProps) => {
    return (
        <>
            {apiState.loading ? (
                // <Skeleton animation="wave"/>
                <CircularProgress />
            ) : apiState.error ? (
                <h1>error</h1>
            ) : apiState.data ? renderSuccess : content}
        </>
    )
}