import React, { useState } from 'react';
import { Box, Typography, Switch, FormControlLabel, Paper, TextField, Button } from '@mui/material';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, width: '100%' }}>
        <Typography variant="h5" gutterBottom>Settings</Typography>

        <FormControlLabel
          control={<Switch checked={darkMode} onChange={handleToggle} />}
          label="Dark Mode"
        />

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" gutterBottom>Change Password</Typography>
          <TextField
            label="New Password"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
          />
            <TextField
                label="Confirm Password"
                type="password"
                fullWidth
            />
            <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                Save Changes
            </Button>
            </Box>
        </Paper>
        </Box>
    );
    };

    export default Settings;
