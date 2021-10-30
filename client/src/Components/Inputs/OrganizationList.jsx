import { Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        // alignItems: 'center',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: '1rem',
        width: '500px',
        background: "#edf5e0",
        position: 'absolute',
        zIndex: 10,
    },
    items: {
        display: 'flex'
    }
}))

const OrganizationList = ({ organizationList, visible, setVisible }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                organizationList.map((item, index) => {
                    if (item) {
                        return (
                            <div className={classes.items} key={index} >
                                <Typography variant='body1'> {item.location}:</Typography>
                                <Typography variant='body2'> &nbsp; {item.name} </Typography>
                                <Divider />
                            </div>
                        )
                    } return null
                })
            }
        </div>
    )
}

export default OrganizationList
