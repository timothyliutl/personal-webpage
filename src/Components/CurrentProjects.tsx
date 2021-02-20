import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ProjectCards from './ProjectCards';

//TODO: fix the horizontal scroll view later

const useStyles = makeStyles({
    
        gridListItem:{
            height:400,
            
        },
        div:{
            width:"80%",
            
        },
        title:{
            margin:50,
            
        }
    });

const CurrentProjects = () =>{

    
    const classes = useStyles()
    return(
        <div className={classes.div}>
            <Typography className={classes.title} variant={'h2'}>Current Projects</Typography>
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