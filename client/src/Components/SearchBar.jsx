import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles, TextField, Grid, InputAdornment, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import CustomMap from './CustomMap';
import OrganizationList from './Inputs/OrganizationList';

const UseStyle = makeStyles((theme) => ({
    gridContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    textField: {
        "& .MuiFilledInput-root": {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            padding: theme.spacing(1),
            background: "#edf5e0",
            borderRadius: '2rem',
        }
    },
    labelRoot: {
        fontSize: '1.2rem',
    },
}));

const SearchBar = ({ organizationList, setOrganizationList }) => {
    const classes = UseStyle();
    const [input, setInput] = useState('');
    const [visible, setVisible] = useState(false);
    const [searchResponse, setSearchResponse] = useState()

    // update search input
    const updateInput = async (input) => {
        const filterList = organizationList.filter((org) => {
            return org.location.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setOrganizationList(filterList);
    };

    console.log('input', input)
    // query db
    const searchOrg = () => {
        axios.get(`/find-org/${input}`)
            .then((response) => setSearchResponse(response.data))
            .catch((error) => console.log(error))
    }

    return (
        <Grid container className={classes.gridContainer}>
            <Grid item sm={12} >
                <TextField
                    fullWidth
                    className={classes.textField}
                    variant='filled'
                    type="text"
                    value={input}
                    onChange={(e) => updateInput(e.target.value)}
                    label="Search location"
                    InputLabelProps={{
                        classes: { root: classes.labelRoot }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button onClick={searchOrg} variant='text' >
                                    <Search />
                                </Button>
                            </InputAdornment>
                        ),
                        disableUnderline: true
                    }}
                />
                {/* <OrganizationList visible={visible} setVisible={setVisible} organizationList={organizationList} /> */}
                <Grid item sm={12}>
                    <CustomMap />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SearchBar;
