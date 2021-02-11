import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';
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
      flexGrow: 1,
    },
    page:{
        marginTop:100
    },
    appbar:{
        position:'fixed',
        borderRadius:16
    }
  }),
);

const Appbar = () => {
    //TODO: get rid of the type any

const classes = useStyles();

    return (
        
        
        <div className={classes.page}>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography></Typography>
                </Toolbar>
            </AppBar>
        </div>
    );


}

export default Appbar;