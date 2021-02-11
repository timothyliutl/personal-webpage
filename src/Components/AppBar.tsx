import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Button, Grid, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flex: 1
        },
        page: {
            marginTop: 100,
            width: '70%'
        },
        appbar: {
            position: 'fixed',
            borderRadius: 16
        }
    }),
);

const Appbar = () => {

    const classes = useStyles();

    return (


        <div className={classes.page}>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Grid container justify={'space-evenly'}>
                        <Grid item>
                            <Typography variant={'h6'}>Home</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'}>Current Projects</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'}>Contact</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );


}

export default Appbar;