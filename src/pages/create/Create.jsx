import  './Create.css';
import React from 'react';
import { Box  , TextField, InputAdornment ,Button   } from "@mui/material";
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.mypalette.main,
  '&:hover': {
    backgroundColor: theme.palette.mypalette.light,
  },
}));
const Create = () => {
  return (
    <Box component="form" sx={{gap:"10px",display:"flex",flexDirection:"column",alignContent:"center"}}>
        <TextField
        fullWidth
          label="Transaction Title"
          id="standard-start-adornment"
          variant="filled"
          sx={{ m: 1, width: '50ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
            },
          }}
        />

        <TextField
          label="Transaction Title"
          id="standard-start-adornment"
          variant="filled"
          sx={{ m: 1, width: '50ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            },
          }}
        />

    <ColorButton  sx={{width:"fit-content",marginLeft:"10px"}} variant="contained">
    Submit
          <KeyboardArrowRightIcon/>
    </ColorButton>

    </Box>
  );
}

export default Create;
