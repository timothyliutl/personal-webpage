import { createStyles, GridList, GridListTile, makeStyles } from '@material-ui/core';
import React from 'react';
import ProjectCards from './ProjectCards'

//TODO: fix the horizontal scroll view later

const useStyles = makeStyles({
    root: {
       
       
        flex: 1,
        flexDirection:'row',
       
        
      },
        gridList:{
                    
            
        },
        gridListItem:{
            height:400
        }
    });

const CurrentProjects = () =>{

    
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <GridList className = {classes.gridList} cellHeight={400} spacing={1}>
                <GridListTile className={classes.gridListItem}>
                    <ProjectCards projectName={'Hello'} projectDescription={'hello'} projectImage={'https://cdn.frankerfacez.com/avatar/twitch/406440657'}></ProjectCards>
                </GridListTile>
                
            </GridList>
            
        </div>
    )
}

export default CurrentProjects;