import { CardActionArea, CardContent, CardMedia, makeStyles, Theme, Typography, Paper } from '@material-ui/core'
import Card from '@material-ui/core/Card'


import React from 'react'

interface iProps {

    projectName: string,
    projectImage: string,
    projectDescription: string,


}

const ProjectCards = (props:iProps) =>{

    const useStyles = makeStyles({
        imageStyle: {
            maxWidth:200,
            maxHeight:100,
            padding:30,
        },
        cardStyle: {
            
            maxHeight:300,
            maxWidth:400,
            
        },
        cardContent:{
            paddingBottom:30
        }
    });

    
    const classes = useStyles();

return(
    <div >
        <Card className={classes.cardStyle}>
            <CardActionArea>
                <CardMedia>
                    <img className={classes.imageStyle} src={props.projectImage}></img>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Paper elevation={0}>
                        <Typography variant={'h2'}>
                        {props.projectName}
                        </Typography>
                        <Typography variant={'h6'}>
                            {props.projectDescription}
                        </Typography>
                    </Paper>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
)

}
export default ProjectCards;