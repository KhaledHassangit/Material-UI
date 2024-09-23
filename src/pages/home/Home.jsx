import { Box  , Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import React from "react";
import { Close } from "@mui/icons-material";


const Home = () => {
  return (
  <Box  sx={{ gap:"20px",display:"flex",flexDirection:"column",alignContent:"center"}}>

      <Paper sx={{width:"350px",display:"flex",
              justifyContent:"space-between"
              ,padding:"10px 15px",alignItems:"center",position:"relative"}} >
        <Typography variant="h6" color="inherit" ml={2} sx={{fontsiz:"1.2rem"}}>GYM</Typography>
        <Typography variant="h6" color="inherit" mr={3}  sx={{fontsiz:"1.3rem",opacity:"0.8",fontWeight:"500"}}>100$</Typography>
        <IconButton aria-label="Close Button" size="small" sx={{position:"absolute",top:"0" ,right:"0"}} >
          <Close fontSize="small" />
        </IconButton>
      </Paper>

      <Paper sx={{width:"350px",display:"flex",
              justifyContent:"space-between"
              ,padding:"10px 15px",alignItems:"center",position:"relative"}} >
        <Typography variant="h6" color="inherit" ml={2} sx={{fontsiz:"1.2rem"}}>GYM</Typography>
        <Typography variant="h6" color="inherit" mr={3}  sx={{fontsiz:"1.3rem",opacity:"0.8",fontWeight:"500"}}>100$</Typography>
        <IconButton aria-label="Close Button" size="small" sx={{position:"absolute",top:"0" ,right:"0"}} >
          <Close fontSize="small" />
        </IconButton>
      </Paper>

      
      <Paper sx={{width:"350px",display:"flex",
              justifyContent:"space-between"
              ,padding:"10px 15px",alignItems:"center",position:"relative"}} >
        <Typography variant="h6" color="inherit" ml={2} sx={{fontsiz:"1.2rem"}}>GYM</Typography>
        <Typography variant="h6" color="inherit" mr={3}  sx={{fontsiz:"1.3rem",opacity:"0.8",fontWeight:"500"}}>100$</Typography>
        <IconButton aria-label="Close Button" size="small" sx={{position:"absolute",top:"0" ,right:"0"}} >
          <Close fontSize="small" />
        </IconButton>
      </Paper>

      <Paper sx={{width:"350px",display:"flex",
              justifyContent:"space-between"
              ,padding:"10px 15px",alignItems:"center",position:"relative"}} >
        <Typography variant="h6" color="inherit" ml={2} sx={{fontsiz:"1.2rem"}}>GYM</Typography>
        <Typography variant="h6" color="inherit" mr={3}  sx={{fontsiz:"1.3rem",opacity:"0.8",fontWeight:"500"}}>100$</Typography>
        <IconButton aria-label="Close Button" size="small" sx={{position:"absolute",top:"0" ,right:"0"}} >
          <Close fontSize="small" />
        </IconButton>
      </Paper>
      </Box>
  );
};

export default Home;
