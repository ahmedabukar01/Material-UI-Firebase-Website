import React from 'react'
import {Typography, Container,Button,IconButton,Toolbar,AppBar} from '@mui/material'
import {Nightlight,Menu} from '@mui/icons-material';
import useStyles from './styles';

const Home = ()=>{
    const classes = useStyles();
    return (
        <>
        <cssBaseline />
        <Container maxWidth="xl" className={classes.home}>
            <AppBar>
                <Toolbar>
                    <Nightlight fontSize="large"/>
                    <Typography variant="h5">NightTech</Typography>
                </Toolbar>
            </AppBar>
        </Container>
        </>
    )
}

export default Home