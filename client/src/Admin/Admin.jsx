import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText,
    ListItemAvatar, Avatar, Fab
} from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight, ExitToApp } from '@material-ui/icons';
import { useAuth } from '../Context/AuthContext';
import { useHistory } from 'react-router';
import axios from 'axios';

import OrgPage from './OrgPage';
import ParkingPage from './ParkingPage';
import Assets from '../Assets/Index';

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
        backgroundImage: Assets.contour,
    },
    Btn: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [component, setComponent] = useState('Organization');
    const [details, setDetails] = useState();
    const { adminLogout, adminLoggedIn } = useAuth();
    const history = useHistory();

    useEffect(() => {
        axios.get('get-org')
            .then((response) => {
                setDetails(response.data);
            }).catch((error) => console.log(`error in fetching organization: ${error}`))
    }, [details])

    const handleLogout = () => {
        localStorage.clear();
        adminLogout();
        history.push('/');
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return adminLoggedIn ? (
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
                <List style={{ cursor: 'pointer' }}>
                    {['Organization'].map((text, index) => (
                        <ListItem key={text} onClick={() => setComponent('Organization')}>
                            <ListItemAvatar>
                                {
                                    index % 2 === 0 ? <img src={Assets.org} alt="org" />
                                        : <img src={Assets.space} alt="space" />
                                }
                            </ListItemAvatar>
                            <ListItemText disableTypography primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List style={{ cursor: 'pointer' }}>
                    {['Parking Spaces'].map((text, index) => (
                        <ListItem key={text} onClick={() => setComponent('Your Parking Spaces')}>
                            <ListItemIcon>{
                                index % 2 === 0 ? <img src={Assets.space} alt="space" />
                                    : <img src={Assets.org} alt="org" />
                            }</ListItemIcon>
                            <ListItemText disableTypography primary={text} />
                        </ListItem>
                    ))}
                </List>
                <div className={classes.Btn} >
                    <List onClick={handleLogout} >
                        {['Logout'].map((text, index) => (
                            <ListItem key={text}>
                                <ListItemIcon>{
                                    <ExitToApp style={{ fill: 'white' }} />
                                }</ListItemIcon>
                                <ListItemText disableTypography primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography style={{ paddingBottom: '1rem' }} variant='h1'>{component}</Typography>
                {
                    component === 'Organization' ? <OrgPage Component={setComponent} />
                        : component === 'Your Parking Spaces' ? <ParkingPage Component={setComponent} data={details} />
                            : <h1>Loading ...</h1>
                }
            </main>
        </div>
    ) : (
        history.push('/')
    )
}
