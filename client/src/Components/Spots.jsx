import React from 'react';
import {
    makeStyles, Typography, Button, ListItem, ListItemText, Container
} from '@material-ui/core';
import { Money, Favorite } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Assets from '../Assets/Index'
import { useHistory } from 'react-router-dom';

import { useOrgContext } from '../Context/OrgContext';

const useStyles = makeStyles((theme) => ({
    grid: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: '#05386b',
        padding: theme.spacing(1),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: "10px",
        backgroundImage: Assets.pattern,
    },
    gridItem: {
        backgroundColor: '#EDF5E0',
        padding: theme.spacing(1),
        margin: theme.spacing(0.5),
        borderRadius: "10px",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
}));

export default function Spots() {
    const classes = useStyles();
    const { spots, getOrgById } = useOrgContext();

    // data from mongo
    const history = useHistory();


    // function to get org with specific id
    const saveOnClick = (id) => {
        getOrgById(id);
        history.push('/details');
    }

    return (
        <Container maxWidth='xl'>
            <Grid
                container
                className={classes.grid}
                alignItems="center"
                justifyContent="center" >
                {
                    spots.map((item, index) =>
                        <Grid item sm={2} className={classes.gridItem} key={index} >
                            <img height="100%" width="100%" src={Assets.parking} alt="parking" />
                            <ListItem >
                                <ListItemText disableTypography>
                                    <Typography variant="body2" >{!item.name ? 'loading...' : item.name} </Typography>
                                    <Typography variant="subtitle1" > {!item.location ? 'loading...' : item.location} </Typography>
                                    <ul className='user-list' >
                                        <li>
                                            <div style={{ display: 'flex', alignItems: "center" }} >
                                                <Money />
                                                <Typography variant="caption" >price: KES {!item.price ? 'loading...' : item.price}</Typography>
                                            </div>
                                        </li>
                                        <li>
                                            <Typography variant="caption" >free spots: {!item.spaces ? 'loading...' : item.spaces} </Typography>
                                        </li>
                                    </ul>
                                </ListItemText>
                            </ListItem>
                            <Button
                                onClick={() => saveOnClick(item._id)}
                                variant="contained" size="small" >
                                <Favorite /> Save Me!
                            </Button>
                        </Grid >
                    )
                }
            </Grid>
        </Container>
    )
}
