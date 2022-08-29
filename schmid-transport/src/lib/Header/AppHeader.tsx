import {
    AppBar, Box,
    Button,
    Drawer,
    IconButton,
    ListItem,
    ListItemIcon,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';

export const AppHeader = () => {
    const [open, setOpen] = useState(false)
    const matches = !useMediaQuery('(min-width:600px)');

    const pageLinks = [
        {name: "REZERVACE", link: "#rezervace", icon: <InfoIcon/>},
        {name: "KONTAKTY", link: "#kontakty", icon: <InfoIcon/>},
        {name: "FAQ", link: "#faq", icon: <InfoIcon/>}
    ]

    return (
        <AppBar style={{color: "black", background: "white"}}
                position="sticky"> <Toolbar>
            {matches ? (
                <>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Drawer
                        open={open}
                        onClose={() => setOpen(false)}
                        anchor={"top"}
                    >
                        {pageLinks.map((l) => (
                            <ListItem button key={l.name}>
                                <ListItemIcon>
                                    {l.icon}
                                </ListItemIcon>

                            </ListItem>
                        ))}
                    </Drawer>


                </>
            ) : (
                <>
                    <Typography style={{
                        fontFamily: "Caveat, cursive",
                        fontSize: "20px",
                        marginRight: "20px",
                        color: "black"
                    }}>SCHMID TRANSPORT
                    </Typography>
                    <Box style={{marginLeft: "auto"}}>
                        {pageLinks.map((l) => (
                            <Button sx={{color: "black"}} href={l.link}>
                                <Typography fontSize={"20px"}>
                                    {l.name}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </>
            )}
        </Toolbar>
        </AppBar>
    )
}