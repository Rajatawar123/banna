import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Grid, Paper, TextField, Button, Avatar,
   Typography }from "@material-ui/core";
import { AddCircleOutlineOutlined }
 from '@mui/icons-material';
const avtarStyle = { backgroundColor: 'green' }
const headerStyle = { margin: '0px', }
function SignUpForm() {
const buttonStyle = { marginLeft: "-1px", 
marginTop: '20px', paddingInline: "148px" }
const paperStyle = { padding: "17px", width: 
382, margin: '45px auto' }

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
     
let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://6848-2401-4900-1c19-3934-320-f360-69a0-70b5.in.ngrok.io/users",
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
              name: name,
              email: email,
              contact: contact,

            }
          })
        }
      ); 
      let resJson = await res.json();
      if (resJson.status === 200) {
        setUserName("");
        setName("");
        setPassword("");
        setContact("");
        setEmail("");
        setMessage("User created successfully");
       
  }  else {
        navigate("/Drop")
        setMessage("Some error occured");
        setError(""); 
      }
      if (
        username === "" ||
        email === "" ||
        contact === "" ||
        password === "" ||
        name === ""
      ){
        setError("please enter all fields");
        
      }
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();
  return (
<Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <AddCircleOutlineOutlined />
            
          </Avatar>
          
          <h1 style={headerStyle}>SignUp</h1>
          <Typography variant="caption">
            please fill this from to creat
             an account</Typography>
        </Grid>
        <div className="App">
          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth label="userName"
              type="text"
              value={username}
              placeholder="userName"
              onChange={(e) => {setUserName
              (e.target.value)}} />
            <br />
            <TextField 
              fullWidth label="Name"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName
                (e.target.value)}
            />
            <TextField
              fullWidth label="email"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => {setEmail
              (e.target.value)}}></TextField>
            <br/>

            <TextField
              fullWidth label="contact"
              type="text"
              value={contact}
              placeholder="conatct"
              onChange={(e) => setContact
                (e.target.value)}
            /><br />
            <TextField
              fullWidth label="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword 
                (e.target.value)}
             /><br />
            <Button style={buttonStyle}
             type="submit" 
            variant="contained"
             color="primary">
               signUp</Button>z
           </form>
          <div className="message">
            {message ? <p>{message}
            </p> : null}</div>
              <div className="error">
                {error ? <p>{error}
                </p> : null}
                </div>
        </div>
      </Paper>
    </Grid>
  );
}
export default SignUpForm;
    

