import { Container, Fab, Fade, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useUpdate } from './AdminContext';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        height: '100%',
    },
    itemDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        // margin: theme.spacing(1),
    },
    list: {
        borderRadius: '10px',
        backgroundColor: '#05396B',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        // backgroundColor: '#edf5e0',
        margin: theme.spacing(1),
        padding: theme.spacing(2),
    },
    listitemText: {

    },
    typography: {
        color: 'white'
    }
}))

const ParkingPage = ({ data, Component }) => {
    const classes = useStyles();
    const [itemList, setItemList] = useState(data);

    // send send selected org to context store
    const { updateOrg } = useUpdate()

    useEffect(() => {
        axios.get('get-org')
            .then((response) => {
                setItemList(response.data);
            }).catch((error) => console.log(`error in fetching organization: ${error}`))
    }, [itemList])

    // axios delete from db
    const deleteItem = (id) => {
        const newList = itemList.filter((itemList) => itemList._id !== id);
        setItemList(newList);
        axios.delete(`/delete-org/${id}`)
    }
    // update
    const updateItem = (item) => {
        updateOrg(item)
        Component('Organization')
    }

    return (
        <Fade in timeout={1000}>
            <Container maxWidth='lg' style={{ height: '80vh' }}>
                <Grid container >
                    <Grid className={classes.itemDetails} item sm={12}>
                        {itemList.map((item) => (
                            <List key={item._id} className={classes.list}>
                                <ListItem item className={classes.listItem} >
                                    <ListItemText inset className={classes.listItemText}>
                                        <Typography variant='h5' className={classes.typography}>{item.name}</Typography>
                                        <Typography variant='h6' className={classes.typography}> At {item.location}</Typography>
                                    </ListItemText>
                                    <ListItemText primary={item.description} disableTypography />
                                    <ListItemText primary='features: ' secondary={item.features} disableTypography />
                                    <ListItemText primary='price: ' secondary={item.price} disableTypography />
                                    <ListItemText primary='spaces: ' secondary={item.spaces} disableTypography />
                                    <ListItemIcon style={{ marginRight: '1rem' }}>
                                        <IconButton onClick={() => updateItem(item)} >
                                            <Edit fontSize='large' style={{ fill: 'whitesmoke' }} />
                                        </IconButton>
                                    </ListItemIcon>
                                    <ListItemIcon style={{ marginRight: '1rem' }}>
                                        <Fab onClick={() => deleteItem(item._id)} >
                                            <Delete style={{ fill: 'red' }} />
                                        </Fab>
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    )
}


export default ParkingPage
