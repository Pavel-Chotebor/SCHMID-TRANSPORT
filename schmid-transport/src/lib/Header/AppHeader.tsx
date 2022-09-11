import {
    AppBar, Box,
    Button,
    Drawer,
    IconButton,
    ListItem,
    ListItemIcon, Slide,
    Toolbar,
    Typography,
    useMediaQuery, useScrollTrigger,
} from "@mui/material";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';

export const AppHeader = () => {
    const [open, setOpen] = useState(false)
    const matches = !useMediaQuery('(min-width:600px)');
    const trigger = useScrollTrigger()

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 200) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);

    console.log("colorChange ", colorChange)

    const pageLinks = [
        {name: "REZERVACE", link: "#rezervace", icon: <InfoIcon/>},
        {name: "KONTAKTY", link: "#kontakty", icon: <InfoIcon/>},
        {name: "FAQ", link: "#faq", icon: <InfoIcon/>}
    ]

    return (
        // <Slide appear direction="down" in={!trigger}>
        <AppBar style={{color: "black", background:"snow"}}
                position="sticky" elevation={colorChange ? 3 : 0}> <Toolbar>
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
                        fontFamily:"Montserrat, sans-serif",
                        fontWeight:600,
                        fontSize: "20px",
                        marginRight: "20px",
                        color: "black"
                    }}>SCHMID <span style={{color:"orange"}}>TRANSPORT</span>
                    </Typography>

                    <Box style={{marginLeft: "auto"}}>
                        {pageLinks.map((l) => (
                            <Button sx={{color: "black"}} href={l.link}>
                                <Typography fontSize={"20px"} fontFamily="Montserrat, sans-serif" fontWeight={200}>
                                    {l.name}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </>
            )}
        </Toolbar>
        </AppBar>
        // </Slide>
    )
}