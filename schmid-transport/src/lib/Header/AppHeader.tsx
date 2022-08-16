import {
    AppBar,
    Button,
    Drawer,
    IconButton, Link,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';

export const AppHeader = () => {
    const matches = !useMediaQuery('(min-width:600px)');
    const [open, setOpen] = useState(false)

    const pageLinks = [
        {name: "O NÁS", link: "#oNas", icon: <InfoIcon/>},
        {name: "NAŠE SLUŽBY", link: "#sluzby", icon: <InfoIcon/>},
        {name: "KONTAKTY", link: "#kontakty", icon: <InfoIcon/>}
    ]

    return (
        <AppBar style={{backgroundColor: "black", color: "white"}}
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
                                {/*<Link underline={"none"} color={"black"} href={l.link}>*/}
                                {/*    <ListItemText fontFamily="Pathway Gothic One" primary={l.name}/>*/}
                                {/*</Link>*/}
                            </ListItem>
                        ))}
                    </Drawer>

                </>
            ) : (
                <>
                    <Button style={{fontFamily: "Pathway Gothic One", fontSize: "24px"}}
                            color="inherit">O NÁS</Button>
                    <Button style={{fontFamily: "Pathway Gothic One", fontSize: "24px"}}
                            color="inherit">REFERENCE</Button>
                    <Button style={{fontFamily: "Pathway Gothic One", fontSize: "24px"}}
                            color="inherit">CENÍK</Button>
                </>
            )}
        </Toolbar>
        </AppBar>
    )
}