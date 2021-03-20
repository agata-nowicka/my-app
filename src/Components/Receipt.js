import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';





const Receipt = (props) => {
  const { choice } = props;
  

if (choice === "Receipt") {
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
} else if (choice === "Invoice") {
  return  (
  <Typography variant="h6" gutterBottom>
 Invoice details
</Typography>)
}
return  (
<Typography variant="h6" gutterBottom>
Advance payment invoice
</Typography>)
 
};

export default Receipt;