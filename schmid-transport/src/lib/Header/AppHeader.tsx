import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    ListItem,
    ListItemIcon,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';

export const AppHeader = () => {
    const [open, setOpen] = useState(false)
    const matches = !useMediaQuery('(min-width:600px)');

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
                    <Button
                        color="inherit">O NÁS</Button>
                    <Button
                        color="inherit">REFERENCE</Button>
                    <Button
                        color="inherit">CENÍK</Button>
                </>
            )}
        </Toolbar>
        </AppBar>
    )
}