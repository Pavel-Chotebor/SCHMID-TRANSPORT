import {Box, Card, CardContent, Container, Grid, Paper, Typography} from "@mui/material";
import {Call, Email} from "@mui/icons-material";
import {ContactOverview} from "./ContactOverview";

export const ContactCards = (): JSX.Element => {

    return (
        <Container maxWidth={false} style={{
            paddingTop: "3rem",
        }} id={"kontakty"}>
            <Typography gutterBottom variant="h4">KONTAKTY</Typography>
            <ContactOverview/>
        </Container>
    )
}