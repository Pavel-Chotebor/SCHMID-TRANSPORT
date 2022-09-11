import {Box, Card, CardContent, Container, Grid, Paper, Typography} from "@mui/material";
import {Call, Email} from "@mui/icons-material";
import {ContactOverview} from "./ContactOverview";

export const ContactSection = (): JSX.Element => {

    return (
        <Container maxWidth={false} style={{
            padding: 0,
            backgroundColor: "snow"
        }} id={"kontakty"}>
            <Typography color={"black"}  gutterBottom fontFamily={"Montserrat, sans-serif"} fontWeight={600} variant="h4">Kontakty</Typography>
            <ContactOverview/>
        </Container>
    )
}