    import React from 'react';
    import { Box, Avatar, Typography, Paper, Button } from '@mui/material';
    import me from "../../assets/me.webp";

    const Profile = () => {
    const user = {
        name: "Khaled Hassan",
        email: "Khaledhassan199919@gmail.com",
        profilePic:{me},
    };

    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 5,
        }}
        >
        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Avatar src={user.profilePic} sx={{ width: 80, height: 80 }} />
            </Box>
            <Typography variant="h5" align="center">{user.name}</Typography>
            <Typography variant="body1" align="center" sx={{ color: 'text.secondary' }}>{user.email}</Typography>

            <Button variant="contained" fullWidth sx={{ mt: 4 }}>
            Edit Profile
            </Button>
        </Paper>
        </Box>
    );
    };

    export default Profile;
