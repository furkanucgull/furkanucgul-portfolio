import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AboutMe from '../components/AboutMe';
import Tools from '../components/Tools';

const Home = () => {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <div className='bg-[#232323] max-h-full max-w-full flex flex-col items-center justify-center'>
                    <AboutMe />
                    <Tools />

                </div>
            </React.Fragment>
        </>
    );
};

export default Home;
