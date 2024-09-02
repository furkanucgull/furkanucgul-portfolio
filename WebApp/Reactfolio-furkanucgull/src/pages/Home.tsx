import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth={false} disableGutters>
                    <Box sx={{ bgcolor: '#232323', height: '100vh', width: '100%' }} />
                </Container>
            </React.Fragment>
        </>
    );
};

export default Home;
