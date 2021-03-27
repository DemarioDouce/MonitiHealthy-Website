import React from "react";
import Grid from "@material-ui/core/Grid";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link } from "react-router-dom";

const SignupSuccess = ({ path }) => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your account has been created! —
            <Link to={path}>
              <strong>Please log in!</strong>
            </Link>
          </Alert>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupSuccess;
