import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';



export default function Main({setMode}) {
    const [isopen, setIsOpen] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const toggleDrawer = () => {
        setIsOpen(!isopen);
    }
    
    const handleDrawerClose = () => {
        setIsOpen(false);
    }
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navbar setIsOpen={setIsOpen} />
            <Sidebar isopen={isopen} handleDrawerClose={handleDrawerClose} setMode={setMode}/>
        </Box>
    );
}
