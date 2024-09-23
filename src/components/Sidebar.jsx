import Drawer from '@mui/material/Drawer';
import { List, ListItemText, ListItemIcon, ListItemButton, ListItem, Divider, IconButton } from "@mui/material";
import {
    Home as HomeIcon,
    Create as CreateIcon,
    Person as PersonIcon,
    SettingsSuggest as SettingsSuggestIcon,
    Logout as LogoutIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Brightness4, Brightness7 } from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar = ({ setMode, isopen, handleDrawerClose }) => {
    const theme = useTheme();
    const currentpath = useLocation();

    return (
        <Drawer
            sx={{
                display: { xs: `${isopen ? 'block' : 'none'}`, md: "block" },
                width: drawerWidth,
                transition: 'transform 0.5s ease-in-out',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            anchor="left"
            variant={isopen ? "temporary" : "permanent"}
            open={isopen}
            onClose={handleDrawerClose}
        >
            <List>
                <ListItem disablePadding sx={{ display: "flex", justifyContent: "center", mb: "14px" }}>
                    <IconButton
                        onClick={() => {
                            localStorage.setItem(
                                "currentMode",
                                theme.palette.mode === "dark" ? "light" : "dark"
                            );

                            setMode(theme.palette.mode === "light" ? "dark" : "light");
                        }} color="inherit"
                    >
                        {theme.palette.mode === "dark" ? <Brightness7 sx={{ color: "orange" }} /> : <Brightness4 />}
                    </IconButton>
                </ListItem>
                <Divider />
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }} disablePadding>
                    <ListItem disablePadding sx={{ borderRadius: "4px", bgcolor: currentpath.pathname === "/" ? theme.palette.favColor.main : null }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/create" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItem disablePadding sx={{ borderRadius: "4px", bgcolor: currentpath.pathname === "/create" ? theme.palette.favColor.main : null }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <CreateIcon />
                            </ListItemIcon>
                            <ListItemText primary="Create" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItem disablePadding sx={{ borderRadius: "4px", bgcolor: currentpath.pathname === "/profile" ? theme.palette.favColor.main : null }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/settings" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItem disablePadding sx={{ borderRadius: "4px", bgcolor: currentpath.pathname === "/settings" ? theme.palette.favColor.main : null }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsSuggestIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/logout" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItem disablePadding sx={{ borderRadius: "4px", bgcolor: currentpath.pathname === "/logout" ? theme.palette.favColor.main : null }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
}

export default Sidebar;
