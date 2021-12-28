import * as React from 'react';
import { Box, Container, Typography, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles'

import Button from './Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        width: '100%',
        height: '100%',
    },
}))

export default function BasicTextFields({ title, setEmail, setPassword, handleAction }) {
    const classes = useStyles();


    return (
        <Container maxWidth='md' className={classes.root}>
            <Box className="heading-container">
                <Typography align='center' variant='h1'>
                    {title}
                </Typography>
            </Box>

            <Box
                component="form"
                // component='div'
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
            // noValidate
            // autoComplete="off"
            >
                <TextField id="email" label="Enter the Email" variant="filled" name="email"
                    fullWidth
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField id="password" label="Enter the Password" variant="filled"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>
            <Button title={title} handleAction={handleAction} />
        </Container>
    );
}