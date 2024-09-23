import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Link  ,IconButton } from "@mui/material";
import { useTheme } from '@mui/material/styles'; 
import me from "../assets/me.webp";
import { Menu } from "@mui/icons-material";

const drawerWidth = 240;

const Navbar = ({setIsOpen}) => {
    const theme = useTheme(); 

    const appBarBgColor = theme.palette.mode === 'light' ? "#00897b" : "#0a0a0a"; 
    const appBarTextColor = theme.palette.mode === 'light' ? "#26a69a" : "white"; 

    return (
        <AppBar 
            position="static"
            sx={{ 
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: 0, md: `${drawerWidth}px` },
                bgcolor: appBarBgColor, 
                color: appBarTextColor  
            }}>

            <Toolbar>
        <IconButton onClick={() => {
            setIsOpen(true)
            }} sx={{display : {md: "none"} ,marginRight:"5px"}}>
            <Menu />
        </IconButton>
                <Link
                    underline='none'
                    color='white'
                    sx={{
                        flexGrow: 1,
                        transition: '0.3s',
                        "&:hover": {
                            letterSpacing: '1px',
                        }
                    }}
                >
                    My Expenses
                </Link>
                <Typography color='white' mr={2}>Khaled Hassan</Typography>
                <Avatar alt="Khaled Hassan" src={me} />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
