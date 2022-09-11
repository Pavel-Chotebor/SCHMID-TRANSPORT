import {Container, Paper, Typography} from "@mui/material";

export const PriceList = (): JSX.Element => {

    return (
        <Container maxWidth={false} style={{background: "snow", height: "50vh", paddingTop: "8%"}}>
            <Container maxWidth={"md"} >
                <Paper style={{boxShadow: "2px 0px 72px 10px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)"}}>
                    <Typography style={{ padding: "5% 0"}} color={"black"} textAlign="center" fontSize={"90px"} fontWeight={600}
                                fontFamily={"Montserrat, sans-serif"}>
                        1000 kč / den
                    </Typography>
                </Paper>
            </Container>
        </Container>
    )
}