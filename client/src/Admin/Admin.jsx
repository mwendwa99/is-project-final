import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Drawer, AppBar, Toolbar, List, CssBaseline, TextField, Grid, Button,
    Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight, ExitToApp, Edit, Delete } from '@material-ui/icons';
import Assets from '../Assets/Index';
import { useAuth } from '../Context/AuthContext';
import { useHistory } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        backgroundColor: '#05396B',
        color: 'white',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: '#05396B',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    Btn: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    textField: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        backgroundColor: '#EDF5E0',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    itemDetails: {
        // backgroundColor: '#EDF5E0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        backgroundColor: '#05396B',
        borderRadius: '5px'
    }
}));

const OrgPage = () => {
    const classes = useStyles();
    return (
        <form className={classes.textField} noValidate autoComplete="off">
            <Grid item sm={8}>
                <Typography align='center' variant='h6'>Enter details about your organization</Typography>
                <TextField id="outlined-primary" label="Name of organization" variant="outlined" color="primary" fullWidth />
                <TextField id="outlined-primary" label="location" variant="outlined" color="primary" />
                <TextField id="outlined-primary" label="parking spaces available" type="number" variant="outlined" color="primary" />
                <TextField id="outlined-primary" label="features" variant="outlined" color="primary" />
                <TextField id="outlined-primary" label="description" variant="outlined" color="primary" />
                <TextField id="outlined-primary" label="price per lot" type='number' variant="outlined" color="primary" />
                <Button type='submit' variant='contained' >Submit</Button>
            </Grid>
        </form>
    )
};

const ParkingPage = ({ Component }) => {
    const classes = useStyles();

    // axios fetch from db
    const initialList = [
        {
            id: '12345',
            location: 'Kimathi St',
            features: 'cctv',
            description: 'suitable for sedans',
            price: 350,
            spaces: 5
        },
        {
            id: '42112',
            location: 'Accra Rd',
            features: 'wifi',
            description: 'suitable for all cars',
            price: 450,
            spaces: 5
        },
        {
            id: '43452',
            location: 'Moi Ave',
            features: 'watchman',
            description: 'suitable for public vehilces',
            price: 350,
            spaces: 5
        }
    ];
    const [itemList, setItemList] = useState(initialList)

    // axios delete from db
    const deleteItem = (id) => {
        const newList = itemList.filter((itemList) => itemList.id !== id);
        setItemList(newList);
    }
    return (
        <Grid container>
            <Grid className={classes.itemDetails} item sm={12}>
                {itemList.map((item) => (
                    <List key={item.id}>
                        <ListItem >
                            <ListItemText disableTypography='true'>
                                {item.location}
                                <ul>
                                    <li> description {item.description} </li>
                                    <li> price:  {item.price} </li>
                                    <li> spaces available: {item.spaces} </li>
                                </ul>
                            </ListItemText>
                            <ListItemIcon >{
                                <IconButton><Edit onClick={() => Component('Organization')} button style={{ fill: 'white' }} /></IconButton>
                            }</ListItemIcon>
                            <ListItemIcon>{
                                <IconButton onClick={() => deleteItem(item.id)} ><Delete button style={{ fill: 'white' }} /></IconButton>
                            }</ListItemIcon>
                        </ListItem>
                    </List>
                ))}
            </Grid>
        </Grid>
    )
}

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [component, setComponent] = useState('Organization');
    const { logout } = useAuth();
    const history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        logout();
        history.push('/');
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Register Your Parking Space
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {
                            theme.direction === 'rtl' ? <ChevronRight style={{ fill: 'white' }} />
                                : <ChevronLeft style={{ fill: 'white' }} />
                        }
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Organization'].map((text, index) => (
                        <ListItem button key={text} onClick={() => setComponent('Organization')} >
                            <ListItemIcon>{
                                index % 2 === 0 ? <img src={Assets.org} alt="org" />
                                    : <img src={Assets.space} alt="space" />
                            }</ListItemIcon>
                            <ListItemText disableTypography='true' primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Parking Spaces'].map((text, index) => (
                        <ListItem button key={text} onClick={() => setComponent('Your Parking Spaces')}>
                            <ListItemIcon>{
                                index % 2 === 0 ? <img src={Assets.space} alt="space" />
                                    : <img src={Assets.org} alt="org" />
                            }</ListItemIcon>
                            <ListItemText disableTypography='true' primary={text} />
                        </ListItem>
                    ))}
                </List>
                <div className={classes.Btn} >
                    <List onClick={handleLogout} >
                        {['Logout'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{
                                    <ExitToApp style={{ fill: 'white' }} />
                                }</ListItemIcon>
                                <ListItemText disableTypography='true' primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography style={{ paddingBottom: '1rem' }} variant='h1'>{component}</Typography>
                {
                    component === 'Organization' ? <OrgPage />
                        : component === 'Your Parking Spaces' ? <ParkingPage Component={setComponent} />
                            : <h1>Loading ...</h1>
                }
            </main>
        </div>
    );
}
