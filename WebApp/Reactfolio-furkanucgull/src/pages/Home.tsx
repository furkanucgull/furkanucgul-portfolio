import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AboutMe from '../components/AboutMe';

const Home = () => {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth={false} disableGutters sx={{ bgcolor: '#232323', height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AboutMe />
                </Container>
            </React.Fragment>
        </>
    );
};

export default Home;
