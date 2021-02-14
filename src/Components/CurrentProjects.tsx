import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ProjectCards from './ProjectCards';

//TODO: fix the horizontal scroll view later

const useStyles = makeStyles({
    
        gridListItem:{
            height:400,
            
        },
        div:{
            width:"80%",
            
        }
    });

const CurrentProjects = () =>{

    
    const classes = useStyles()
    return(
        <div className={classes.div}>
            <Grid container justify={'space-between'}>
                <Grid item className={classes.gridListItem}>
                    <ProjectCards projectName={'Hello'} projectDescription={'hello'} projectImage={'https://cdn.frankerfacez.com/avatar/twitch/406440657'}></ProjectCards>
                </Grid>
                <Grid item>
                    <ProjectCards projectName={'Hello'} projectDescription={'hello'} projectImage={'https://cdn.frankerfacez.com/avatar/twitch/406440657'}></ProjectCards>
                </Grid>
                <Grid item>
                    <ProjectCards projectName={'Hello'} projectDescription={'hello'} projectImage={'https://cdn.frankerfacez.com/avatar/twitch/406440657'}></ProjectCards>
                </Grid>
                <Grid item>
                    <ProjectCards projectName={'Hello'} projectDescription={'hello'} projectImage={'https://cdn.frankerfacez.com/avatar/twitch/406440657'}></ProjectCards>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default CurrentProjects;