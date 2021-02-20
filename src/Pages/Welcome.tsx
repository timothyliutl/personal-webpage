import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import React, { FC, useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


interface IProps {
    cards?: JSON
}

const Welcome: FC<IProps> = (props) => {
    const styles = makeStyles({
        card: {
            widthMin: 200,
            heightMin: 75,
            padding: 20,
            marginTop: 15,
            borderRadius:16

        },
        title:{
            marginTop:30
        },
        type: {
            marginBottom: 15,
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: {
            marginLeft: 20,
            marginRight: 20
        },
        link: {
            textDecoration: 'none',

        }
    });
    const classes = styles();
    const cards = props.cards;

    const [isHovering, setIsHovering] = useState(false);

    const setHover = () =>{
        setIsHovering(!isHovering);
    }

    return (
        <div>
            <Typography variant={'h2'}>Hello, I am Timothy Liu</Typography>
            <Typography variant={'h5'} className={classes.type}>
                Second year Queen's Mathematics and Engineering Student
            </Typography>

            
            <Grid container justify={'center'}>
                <Card className={classes.card} onMouseEnter={setHover} onMouseLeave={setHover} elevation={isHovering?6:1}>
                <Typography variant={'h4'} className={classes.type}>
                Quick Links
                </Typography>
                    <Grid container direction={'row'}>
                        <Grid item className={classes.icon}>
                            <a className={classes.link} href={'https://drive.google.com/file/d/1aWGhG6A5G0cX_RKIhh_stYlnLnjjoHA0/view?usp=sharing'}>
                            <InsertDriveFileIcon fontSize={'large'} color={'inherit'}></InsertDriveFileIcon>
                            <Typography variant={'h6'}>Resume</Typography>
                            </a>
                        </Grid>
                        <Grid item className={classes.icon}>
                            <a className={classes.link} href={'https://github.com/timothyliutl'}><GitHubIcon fontSize={'large'}></GitHubIcon>
                                <Typography variant={'h6'}>GitHub</Typography></a>
                        </Grid>
                        <Grid item className={classes.icon}>
                            <a href={'https://www.linkedin.com/in/timothy-liu-4a738619b/'} className={classes.link}>
                                <LinkedInIcon fontSize={'large'} color={'primary'}></LinkedInIcon>
                                <Typography variant={'h6'}>LinkedIn</Typography>
                            </a>

                        </Grid>
                    </Grid>
                </Card>
            </Grid>




        </div>
    )
}

export default Welcome;