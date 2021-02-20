import { Container, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import React, { FC } from 'react'; 


interface IProps{
    cards?: JSON
}

const Welcome:FC<IProps> = (props) =>{
    const cards = props.cards;

    return(
        <div>
            <Typography variant={'h4'}>Hello, I am Timothy Liu</Typography>
            <Typography variant={'h6'}>
                Second year Queen's Mathematics and Engineering Student
            </Typography>
            <Card>
                <Grid container direction={'row'}>
                    <Container>
                        <Typography variant={'h6'}></Typography>
                    </Container>
                </Grid>
            </Card>
          
        </div>
    )
}

export default Welcome;