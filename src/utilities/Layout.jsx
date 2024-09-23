import { Outlet } from "react-router-dom";
import Main from "./Main";
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;
const Layout = () => {  

  const [mode, setMode] = useState(localStorage.getItem("currentMode") === null ? "dark": localStorage.getItem("currentMode") === "light" ? "light" : "dark")
  const darkTheme = createTheme({
    palette: {
      mode,
      mypalette:{
        main: mode === 'dark' ? "#d2691e" : "#00897b",  
        light: mode === 'dark' ? "#ff8d21" : "#26a69a",  
          },
          favColor: {
            main: grey[500],
          },
    },
  });

  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <main>
    <Main setMode={setMode}/>
    <Box 
    sx={{ width: { md: `calc(100% - ${drawerWidth}px)` },ml: { sm: 0, md: `${drawerWidth}px` },display:"flex",justifyContent:"center" ,marginTop:"50px"}}>
    <Outlet />
        </Box>
    </main>
    </ThemeProvider>

  );
};

export default Layout;
