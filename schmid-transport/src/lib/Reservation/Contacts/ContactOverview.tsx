import {Box, Typography, Grid, Paper} from "@mui/material";
import {Call, Email, LocationOn} from "@mui/icons-material";
import {ContactForm} from "./ContactForm";

export const ContactOverview = (): JSX.Element => {

    return (
        <Paper elevation={0} sx={{borderRadius: "20px"}}>
            <Grid container justifyContent={"space-between"}>
                <Grid item xs={12} md={6}>
                    <Box flexDirection="column">
                        <Box>
                            <Call fontSize="medium"/>
                            777 888 999
                        </Box>
                        <Box>
                            <Email fontSize="medium"/>
                            777 888 999
                        </Box>
                        <Box>
                            <LocationOn fontSize="medium"/>
                            Na Souvrati 6, Praha 6, 160 00
                        </Box>
                        <iframe
                            src="https://frame.mapy.cz/s/nozoruvoku"
                            width={"100%"}
                            height="400px"
                            frameBorder="0"/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactForm/>
                </Grid>
            </Grid>

        </Paper>
    )
}