import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1000px',  
  },   
}));


const Receipt = () => {

  const classes = useStyles();
  return (
    <React.Fragment>
     
      <Typography variant="h6" gutterBottom>
        Receipt details
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
        </Grid>
        
      </Grid>
     
    </React.Fragment>
  );
};

export default Receipt;