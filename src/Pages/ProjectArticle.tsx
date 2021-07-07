import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import jeffImage from "../Assets/2229219.jpg"





const ProjectArticle = () => {

    const styles = makeStyles({
        root: {
            marginTop: 100,
            width: "70%",
            margin: "auto"

        },
        carousel: {
            
            margin: "auto",
            marginTop: 100
        },
        img:{
            maxHeight:400,
            objectFit:'cover'
        },
        textMargin:{
            width:"65%",
            margin: "auto",
            marginBottom:200
        }

    });

    const classes = styles();

    return (<div>


        <div className={classes.root}>
            <Grid container justify={'center'} direction={'column'}>
                <Grid item>
                    <Box fontStyle={'bold'}>
                        <Typography variant={'h2'}>Why Apple Math is Better than Engineering Physics</Typography>
                    </Box>
                </Grid>

                <Grid item>
                    <div className='carousel-wrapper'>
                        <Carousel className={classes.carousel} showArrows={true} infiniteLoop>
                            <div>
                                <img className={classes.img} src={jeffImage}></img>
                            </div>
                            <div>
                                <img className={classes.img} src={jeffImage}></img>
                            </div>
                            <div>
                                <img className={classes.img} src={jeffImage}></img>
                            </div>
                            <div>
                                <img className={classes.img} src={jeffImage}></img>
                            </div>
                        </Carousel>
                    </div>
                </Grid>
            </Grid>

            
        </div>
        <div className={classes.textMargin}>
        <Typography variant={'h3'} align={'left'}>Just why</Typography>
            <Typography variant={'h6'} align={'left'}>There are many reasons why someone would decide to choose eng phys, but none of them are really valid. Who would want to do engineering physics when a program like Apple Math exists</Typography>
        </div>
    </div>
    )
}
//Note carousel children type is incorrect, need to change it to ReactNode

export default ProjectArticle;