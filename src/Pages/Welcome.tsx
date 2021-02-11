import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import React, { FC } from 'react'; 


interface IProps{
    cards?: JSON
}

const Welcome:FC<IProps> = (props) =>{
    const cards = props.cards;

    return(
        <div>
            <Typography variant={'h1'}>Hello There</Typography>
      <Grid container>
        <Grid item>
          <Card>
              <Typography variant={'h4'}>
                  Quick Links
              </Typography>
          </Card>
        </Grid>
        
      </Grid>
        </div>
    )
}

export default Welcome;