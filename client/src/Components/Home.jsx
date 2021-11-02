import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import Assets from '../Assets/Index';
import SearchBar from './SearchBar';
import Spots from './Spots';
import axios from 'axios';

const UseStyle = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
    },
}));

const Home = () => {
    const classes = UseStyle();
    const [organizations, setOrganizations] = useState([]);
    const [organizationList, setOrganizationList] = useState([])

    useEffect(() => {
        axios.get('/get-org')
            .then((response) => {
                let res = (response.data)
                setOrganizations(res)
                setOrganizationList(res)
            }).catch((error) => console.log(`error in fetch Spots ${error}`));

    }, []);


    return (
        <div className='body__section' >
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5} className={classes.root}>
                <Grid item sm={6} md={6} lg={6}>
                    <img height="auto" width="100%" src={Assets.map} alt="map-illustration" />
                </Grid>
                <Grid item className={classes.text} sm={6} md={6} lg={6} >
                    <Typography variant='h1' align='center'>find a space in Nairobi, CBD</Typography>
                    <SearchBar organizationList={organizationList} />
                </Grid>
                <Grid item sm={12}>
                    <Typography align="center" variant="h1"> Parking Lots </Typography>
                    <Spots organizations={organizations} />
                </Grid>
            </Grid>
        </div >
    );
}

export default Home;