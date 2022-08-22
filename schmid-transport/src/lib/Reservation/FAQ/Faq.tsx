import {Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

export const Faq = (): JSX.Element => {
    return (
        <Container id={"faq"} maxWidth={false} style={{marginTop: "3rem", padding: "6rem", backgroundColor: "black",  scrollBehavior: "smooth"}}>
            <Container maxWidth={"lg"}>
                <Box>
                    <Typography variant={"h4"} color={"white"} style={{margin: "1rem 0"}}>FAQ</Typography>
                    <Accordion sx={{backgroundColor: "black", border: "1px solid white", color: "white"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMore sx={{color: "white"}}/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>ITEM 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{backgroundColor: "black", border: "1px solid white", color: "white"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMore sx={{color: "white"}}/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>ITEM 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </Container>
    )
}