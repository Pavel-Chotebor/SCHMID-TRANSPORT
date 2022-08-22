import {Box, Card, CardContent, Container, Grid, Paper, Typography} from "@mui/material";
import {Call, Email} from "@mui/icons-material";

export const ContactCards = (): JSX.Element => {

    return (
        <Container maxWidth={"md"} style={{
            marginTop: "3rem",
        }} id={"kontakty"}>
            <Typography variant={"h4"}>KONTAKTY</Typography>
            <Grid container style={{marginTop: "2rem"}}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={20} style={{
                        backgroundColor: "white",
                        height: "180px",
                        borderRadius: 0,
                        paddingTop: "3rem"
                    }}>
                        <Box>
                            <Call fontSize={"large"}/>
                        </Box>
                        <Box>
                            <Typography variant={"h4"}>+420 777 888 999</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={20} style={{
                        backgroundColor: "black",
                        color: "white",
                        height: "180px",
                        borderRadius: 0,
                        paddingTop: "3rem"
                    }}>
                        <Box>
                            <Email fontSize={"large"}/>
                        </Box>
                        <Box>
                            <Typography variant={"h4"}>schmid@gmail.com</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} style={{marginTop: "2rem"}}>
                    <Card sx={{maxWidth: 1300}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Na Souvrati 6, Praha 6, 160 00
                            </Typography>
                        </CardContent>
                        <iframe
                            src="https://frame.mapy.cz/s/nozoruvoku"
                            width={"100%"}
                            height="400px"
                            frameBorder="0"/>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}