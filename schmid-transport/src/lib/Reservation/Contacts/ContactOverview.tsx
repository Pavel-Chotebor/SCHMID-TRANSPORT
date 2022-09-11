import {Box, Grid, Container} from "@mui/material";
import {CallOutlined, Email, LocationOn} from "@mui/icons-material";
import {ContactForm} from "./ContactForm";
import {ContactItemCard} from "./ContactItemCard";

export const ContactOverview = (): JSX.Element => {

    return (
        <Box>
            <Container maxWidth={"md"}>
                <Grid container justifyContent={"space-evenly"} mt={"2rem"} mb={"2rem"}>
                    <Grid item xs={12} md={4}>
                        <ContactItemCard icon={<CallOutlined sx={{fontSize: "50px", color: "orange"}}/>}
                                         text={"777 888 999"}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContactItemCard icon={<Email sx={{fontSize: "50px", color: "orange"}}/>}
                                         text={"schmid@gmail.com"}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContactItemCard icon={<LocationOn sx={{fontSize: "50px", color: "orange"}}/>}
                                         text={"Na Souvrati 6, Praha 6"}/>
                    </Grid>
                </Grid>
            </Container>
            <Grid container justifyContent="center">
                <Grid item lg={4} xs={12}>
                    {/*<div style={{filter: "grayscale(94%)", pointerEvents:'none'}}>*/}
                    {/*    <iframe*/}
                    {/*        src="https://frame.mapy.cz/s/nozoruvoku"*/}
                    {/*        width={"100%"}*/}
                    {/*        height="600px"*/}
                    {/*        frameBorder="0"*/}
                    {/*        draggable={false}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="100%" height="600px" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=souvrati%206&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no"/>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Container maxWidth="sm" style={{height: "100%", padding: 0}}>
                        <ContactForm/>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}