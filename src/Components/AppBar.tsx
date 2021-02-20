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
           
        },
        page: {
            marginTop: 100,
            

        },
        appbar: {
            position: 'fixed',
            borderRadius: 20,
            width: '95%',
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
                            <Typography variant={'h6'}>Currently</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'}>Under</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'}>Construction</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );


}

export default Appbar;