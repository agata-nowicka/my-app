  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Adress from './Adress';
import Receipt from './Receipt';
import Review from './Review';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: theme.spacing(6),
  }, 
}));
const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, prop) {
  switch (step) {
    case 0:
      return <Adress />;
    case 1:      
      return <Receipt choice={prop}/>;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}


const Form = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [choice, setChoice] = React.useState('null');
  const [state, setState] = React.useState({
    type: '',    
  });
 

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });   
     
    setChoice(event.target.value);
    console.log(choice);
  };
  

  return (
    <React.Fragment>
    <CssBaseline />
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Company name
        </Typography>
      </Toolbar>
    </AppBar>
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography variant="h6" gutterBottom>
        Invoice details
      </Typography>
     
        <Grid item xs={12}>
        <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="type-native-required">Document type</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          name="type"
          inputProps={{
            id: 'type-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'Receipt'}>Receipt</option>
          <option value={'Invoice'}>Invoice</option>
          <option value={'API'}> Advance payment invoice</option>
        </Select>       
      </FormControl>
        </Grid>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will
                send you an update when your order has shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, choice)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
        
      </Paper>  
      
    </main>
  </React.Fragment>
  );
}

export default Form;
