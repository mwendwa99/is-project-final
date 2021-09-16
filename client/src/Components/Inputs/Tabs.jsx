import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Tabs, Tab, Typography, Box, InputBase, Button } from '@material-ui/core';
import { Mail, Lock } from '@material-ui/icons';
import Assets from '../../Assets/Index'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        borderRadius: 5,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    tabSection: {
        backgroundColor: '#58dd90'
    },
    gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(1),
        flexDirection: 'column'
    },
    inputSection: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: " 15px",
        display: "flex",
        margin: theme.spacing(1),
        padding: theme.spacing(0.5),
        background: '#C4C4C4',
    },
    plateIcon: {
        height: "30px",
        width: "30px",
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.tabSection} position="static">
                <Tabs value={value} variant="fullWidth" indicatorColor='primary' onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Customer" {...a11yProps(0)} />
                    <Tab label="Admin" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <form id="register-form"  >
                    <Grid container >
                        <Grid item sm={12} xs={12} className={classes.inputSection}>
                            <InputBase type="email" placeholder="email"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            />
                            <div className={classes.plateIcon} >
                                <Mail fontSize='medium' />
                            </div>
                        </Grid>
                        <Grid item sm={12} xs={12} className={classes.inputSection}>
                            <InputBase type="password" placeholder="password"
                            // value={password}
                            // onChange={e => setPassword(e.target.value)}
                            />
                            <div className={classes.plateIcon} >
                                <Lock fontSize='medium' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} className={classes.gridItem}>
                            <div>
                                <Button
                                    variant='contained' type='submit' size="small">
                                    LOGIN
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form >
            </TabPanel>
            <TabPanel value={value} index={1}>
                <form id="register-form"  >
                    <Grid container >
                        <Grid item sm={12} xs={12} className={classes.inputSection}>
                            <InputBase type="email" placeholder="email"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            />
                            <div className={classes.plateIcon} >
                                <Mail fontSize='medium' />
                            </div>
                        </Grid>
                        <Grid item sm={12} xs={12} className={classes.inputSection}>
                            <InputBase type="password" placeholder="password"
                            // value={password}
                            // onChange={e => setPassword(e.target.value)}
                            />
                            <div className={classes.plateIcon} >
                                <Lock fontSize='medium' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} className={classes.gridItem}>
                            <div>
                                <Button
                                    variant='contained' type='submit' size="small">
                                    LOGIN
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form >
            </TabPanel>
        </div>
    );
}
