import {Box, Grid, Paper, SvgIconTypeMap, Typography} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

interface ContactItemCardInterface {
    text: string;
    icon: JSX.Element
}

export const ContactItemCard = ({icon, text}: ContactItemCardInterface): JSX.Element => {

    return (
        <Box display="flex" flexDirection="column" >
                <Grid item xs={12} mt={"35px"}>
                    {icon}
                </Grid>
            <Typography textAlign="center" color={"black"} fontFamily={"Montserrat, sans-serif"}
                        fontWeight={600} mt={"20px"}>{text}
            </Typography>
        </Box>
    )
}