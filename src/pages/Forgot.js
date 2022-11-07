import React, { useState } from "react";
import { Avatar, Grid, Paper, TextField, Typography, Button } from "@material-ui/core";
import { AddCircleOutlineOutlined } from '@mui/icons-material';
const paperStyle = { padding: "30px", width: 495, margin: '91px auto' }
const headerStyle = { margin: '0px', }
const avtarStyle = { backgroundColor: 'green' }
const buttonStyle = { marginLeft: "-1px", marginTop: '20px', paddingInline: "149px" } 

const Forgot = () => {

  
  return (

    <>
      <Grid container>
         <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avtarStyle}>
              <AddCircleOutlineOutlined />
            </Avatar>
            <h1 style={headerStyle}>Forgot</h1>
            <Typography variant="caption">Please enter your email address.
             We will send you an email with a password reminder.</Typography>
          </Grid>
          <form>
          <TextField fullWidth label="Email" />
            <Button style={buttonStyle} type="submit" variant="contained" color="primary">Reset Password</Button>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            
            </div>
          </form>
        </Paper>
      </Grid>
    </>

  );
};

export default Forgot; 
