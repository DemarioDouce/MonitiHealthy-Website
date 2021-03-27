//Load components
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as ReactLink, withRouter } from "react-router-dom";
import { green } from "@material-ui/core/colors";
import axios from "axios";
import NurseLoginPage from "./NurseLoginPage";
import Paper from "@material-ui/core/Paper";
import { Alert, AlertTitle } from "@material-ui/lab";
import Copyright from "../res/components/Copyright";

//Style
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    padding: theme.spacing(2),
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const NurseSignUpPage = () => {
  const classes = useStyles();
  const apiUrl = "http://localhost:3000/registernurse";
  const [nurse, setNurse] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    employeeNumber: "",
    password: "",
    confirmpassword: "",
    address: "",
    city: "",
    phoneNumber: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const [status, setStatus] = React.useState(false);
  const onChange = (e) => {
    e.persist();
    setNurse({ ...nurse, [e.target.name]: e.target.value });
  };
  const saveNurse = (e) => {
    e.preventDefault();
    const data = {
      firstName: nurse.firstName,
      lastName: nurse.lastName,
      employeeNumber: nurse.employeeNumber,
      password: nurse.password,
      address: nurse.address,
      city: nurse.city,
      phoneNumber: nurse.phoneNumber,
    };
    axios.post(apiUrl, data).then((result) => {});
    setNurse({
      _id: "",
      firstName: "",
      lastName: "",
      employeeNumber: "",
      password: "",
      confirmpassword: "",
      address: "",
      city: "",
      phoneNumber: "",
    });
  };
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  const handleButtonClick = (e) => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      timer.current = window.setTimeout(() => {
        e.preventDefault();
        const data = {
          firstName: nurse.firstName,
          lastName: nurse.lastName,
          employeeNumber: nurse.employeeNumber,
          password: nurse.password,
          address: nurse.address,
          city: nurse.city,
          phoneNumber: nurse.phoneNumber,
        };
        axios.post(apiUrl, data).then((result) => {
          setStatus(true);
        });
        setSuccess(true);
        setLoading(false);
      }, 2000);

      setNurse({
        _id: "",
        firstName: "",
        lastName: "",
        employeeNumber: "",
        password: "",
        confirmpassword: "",
        address: "",
        city: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {!status ? (
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Nurse Sign up
            </Typography>
            <form onSubmit={saveNurse} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={nurse.firstName}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    value={nurse.lastName}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="employeeNumber"
                    label="Employee Number"
                    name="employeeNumber"
                    autoComplete="employeeNumber"
                    value={nurse.employeeNumber}
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={nurse.password}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmpassword"
                    autoComplete="current-password"
                    value={nurse.confirmpassword}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="address"
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    value={nurse.address}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    value={nurse.city}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    id="phonenumber"
                    value={nurse.phoneNumber}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              <div className={classes.root}>
                <div className={classes.wrapper}>
                  <Fab
                    aria-label="save"
                    type="submit"
                    color="primary"
                    className={buttonClassname}
                    onClick={handleButtonClick}
                  >
                    {success ? <CheckIcon /> : <SaveIcon />}
                  </Fab>
                  {loading && (
                    <CircularProgress
                      size={68}
                      className={classes.fabProgress}
                    />
                  )}
                </div>
                <div className={classes.wrapper}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                    className={buttonClassname}
                    disabled={loading}
                    onClick={handleButtonClick}
                  >
                    Create Account
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </div>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link component={ReactLink} to="/nurse-login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={5} className={classes.paper}>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Your account has been created! —{" "}
                  <strong>Please log in!</strong>
                </Alert>
                <NurseLoginPage />
              </Paper>
            </Grid>
          </Grid>
        )}

        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default NurseSignUpPage;
