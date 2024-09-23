import React from "react";
import { Typography, Box, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.mypalette.main,
    '&:hover': {
    backgroundColor: theme.palette.mypalette.light,
    },
}));
const NotFound = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.background.default}
            textAlign="center"
            mt={15}
        >
            <ErrorOutlineIcon style={{ fontSize: 80, color: theme.palette.error.main }} />
            <Typography variant="h3" color={theme.palette.error.main} gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" color={theme.palette.text.secondary}>
                Oops! The page you are looking for doesn't exist or an error occurred.
            </Typography>
            <ColorButton
                variant="contained"
                color="primary"
                onClick={handleGoHome}
                sx={{ mt: 3 }}
            >
                Go Back to Home
            </ColorButton>
        </Box>
    );
};

export default NotFound;
