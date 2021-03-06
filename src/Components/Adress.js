import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }, 
  top: {
    marginTop: theme.spacing(6),
  }
}));


const Adress = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  
  return (
    <React.Fragment>
       <Grid container spacing={3}>
   
        
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>   
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={12} sm={6}>
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date of issue"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline2"
          label="Sale date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid></MuiPickersUtilsProvider>     
        
      
      </Grid>

      <Typography variant="h6" gutterBottom className={classes.top}>
        Vendor address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="dealerName"
            name="dealerName"
            label="Dealer name"
            fullWidth           
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="NIP"
            name="NIP"
            label="NIP"
            fullWidth          
          />
        </Grid>
        <Grid item xs={12}  sm={9}>
          <TextField
            required
            id="City"
            name="City"
            label="City"
            fullWidth
           // autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}  sm={3}>
          <TextField
            id="zipCode"
            name="zipCode"
            label="ZIP code"
            fullWidth
            //autoComplete="shipping address-line2"
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom className={classes.top}>
        Buyer address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="buyerName"
            name="buyerName"
            label="Buyer name"
            fullWidth           
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="NIP2"
            name="NIP"
            label="NIP"
            fullWidth          
          />
        </Grid>
        <Grid item xs={12}  sm={9}>
          <TextField
            required
            id="City2"
            name="City"
            label="City"
            fullWidth
           // autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}  sm={3}>
          <TextField
            id="zipCode2"
            name="zipCode"
            label="ZIP code"
            fullWidth
            //autoComplete="shipping address-line2"
          />
        </Grid>   
      </Grid>
    </React.Fragment>
  );
};

export default Adress;