import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ServiceCall from '../../Service/ServiceCall';
import Snowfall from 'react-snowfall'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/720x600/?smile)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignUpSide() {
  const classes = useStyles();

  const [fullname, setFullName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRePassword] = React.useState("");

  function handleFullName(event){
    setFullName(event.target.value)
  }

  function handleDob(event){
    setDob(event.target.value)
  }

  function handleCompany(event){
    setCompany(event.target.value)
  }

  function handleEmail(event){
    setEmail(event.target.value)
  }

  function handlePassword(event){
    setPassword(event.target.value)
  }

  function handleRePassword(event){
    setRePassword(event.target.value)
  }

  function handleSubmit(){
    if(password === repassword){

        const userDetails = {
            "FullName":fullname,
            "DOB":dob,
            "Email": email,
            "Organization":company,
            "Password":password
        }

    ServiceCall.userSignUp(userDetails).then((response)=>{
        if(response.data === "False"){
          alert("Already a registered User, Please login with same ID")
        }
        else{
          localStorage.setItem('user_key', response.data._id.$oid);
          window.open("/","_self")
        }

    })
    }else{
        alert("Password did not match")
    }
      
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Snowfall />

      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handleFullName}
            />

            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                onChange={handleDob}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="company"
              label="Company/University"
              name="company"
              autoComplete="company"
              autoFocus
              onChange={handleCompany}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmail}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePassword}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="re-password"
              label="Re-Enter Password"
              type="password"
              id="re-password"
              onChange={handleRePassword}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/signup" >
                    <Typography variant="body2" color="primary" align="center">
                        Forgot password?
                    </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/login">
                    <Typography variant="body2" color="primary" align="center">
                        Do you already have an account? Log In
                    </Typography>
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
                <Typography variant="body2" color="textSecondary" align="center">
                    Welcome to Anubhav - Vibrance
                </Typography>
            </Box>
         
        </div>
      </Grid>
    </Grid>
  );
}