import {
  Avatar, Grid, Paper, TextField, Link,
  Button,
} from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

//  import {useNavigate} from "react-router-dom"

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert'; 
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close'

import {  useNavigate} from "react-router-dom"


import React, { useState } from "react";
import { Formik } from "formik";
const paperStyle = { padding: "17px", width: 382, margin: '45px auto' }
const AvtarStyle = { backgroundColor: "green" }
const LoginStyle = {}
const buttonStyle = { align: "center", paddingInline: "150px", marginLeft:"-6px", marginTop: '10px' }


function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [nevi, setNevi] = React.useState(false);
  const navigate = useNavigate(false);


  let handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const res = await fetch(
        "https://abaf-2401-4900-1c19-3934-7b49-f553-b96c-7855.in.ngrok.io/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user:
            {
              username: username,
              password: password,
            }
          })
        }
      );
      let resJson = await res.json();
      if (resJson.status === 200) {
        setUserName("");

        setPassword("");
         
        setMessage("User created successfully");
      } else {
        navigate("/Drop")
        setMessage("Some error occured");
        setError("");
      }
      <Box onClick={() => {
        setNevi(false);
      }}
       ></Box>
      if (
        username === "" ||
        password === ""

      ) {
        
        setError("please enter all fields");
      }
    } catch (err) {
      console.log(err);
    }
  };
 
  return (      
    <>
      <Grid>
       <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={AvtarStyle}>
              <AddCircleOutlineOutlined />
            </Avatar>
            <h1 style={LoginStyle}>Login</h1>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth label="userName"
              type="text"
              value={username}
              placeholder="userName"
              onChange={(e) => setUserName(e.target.value)} />
            <TextField
              fullWidth label="password"
              type="password"
              value={password} 
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
       
            <Box sx={{ width: '100%' }}>
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close" 
                      color="inherit"
                      size="small"
                        onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  login successfully !
                </Alert>
              </Collapse>
              <Button style={buttonStyle} type="submit" variant="contained"
                color="primary" disabled={open}    
                >Login</Button>
            </Box>

            <Grid item>
              <Link href="Forgot" variant="body2">Forgot password?</Link>
            </Grid> <br />
            <Grid item xs>
              <Link href="SignUpForm" variant="body2">
               {"Don't have an account? Sign Up"}
              </Link>
            </Grid>

          </form>
        </Paper>
      </Grid>

    </>
  );

}
export default Login;



