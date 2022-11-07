import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from "react-router-dom"
const paperStyle = { padding: "17px", width: 1339,
 margin: 'px auto', marginLeft: "-17px", marginTop: 
 "-17px" }


const Drop = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [data, setData] = React.useState(null);

    const [logo, setLogo] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChangeClick = (event) => {
        setData(event.currentTarget);
    }

    const handleLogoClick = (event) => {
        setLogo(event.currentTarget);
        navigate("/CompanyInformation")

    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleEndClose = () => {
        setData(null);
    };

    const handleLogoClose = () => {
        setLogo(null);
    };
    const display = () => {
        setAnchorEl(null);
    }
    const show = () => {
        setData(null);
    }
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{}}>
                <Grid elevation={20} style={paperStyle}>
                    <Grid>
                        <AppBar position="static" style={{ background: "#0A2BFE" }}
                        >
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <Button aria-controls="simple-menu" aria-haspopup="true"
                                        onClick={handleLogoClick} style={{ color: "white" }}>

                                    </Button>
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 50 }}  >
                                    <Button aria-controls="simple-menu" aria-haspopup="true"
                                        onClick={handleClick} style={{ color: "white", marginLeft: "-65px" }}>
                                        Leave
                                    </Button>
                                </Typography>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={display}>
                                        <Button onClick={() => navigate("/Apply_Leave")} > Apply Leaves </Button></MenuItem>
                                    <MenuItem onClick={handleClose} style={{ color: "black !immortant" }} >
                                        <Button onClick={() => navigate("/Leave_Tabel")}>Leaves </Button> </MenuItem>
                                    <MenuItem onClick={handleClose}>  <Button onClick={() => navigate("/Holiday_List")}>Holiday List </Button></MenuItem>
                                </Menu>


                                 {/* Attendance page  */}
                                <Typography variant="h6" component="div" sx={{ flexGrow: 30 }}>
                                    <Button aria-controls="simple-menu" aria-haspopup="true"
                                        onClick={handleChangeClick} style={{ marginRight: "1035px ", color: "white" }} >
                                        Attendance
                                    </Button>
                                </Typography>


                                <Menu
                                    id="simple-menu"
                                    anchorEl={data}
                                    keepMounted
                                    open={Boolean(data)}
                                    onClose={handleEndClose}
                                >

                                    <MenuItem onClick={show}>
                                        <Button onClick={() => navigate("/Forgot")}> Apply Leaves </Button></MenuItem>
                                    <MenuItem onClick={handleEndClose} style={{ color: "black !immortant" }} >
                                        <Button onClick={() => navigate("/Leave_Tabel")}>Leaves </Button> </MenuItem>
                                    <MenuItem onClick={handleEndClose}>Holiday List</MenuItem>
                                </Menu>
                         </Toolbar>
                        </AppBar>
                        </Grid>

                    <Grid sx={12} sm={12} align="center" style={{ color: "rebeccapurple", background: "" }}>

                        <br></br>
                        <br></br>
                        <h1>Free Employee Leave Application Form <br></br>Template</h1>
                        <Typography variant="caption">

                            The leave application form template is a solution to manage time-off requests where your employees can provide their name, <br></br> department, contact information, type of leave, leave dates, travel details through a simple leave application form.<br></br>

                            You can easily customize this leave application form using our form builder. 123FormBuilder provides a number of options that simplifies <br></br><br></br> data collection processes like company leave applications.
                        </Typography>


                        <Grid align="center">
                            <img style={{ height: "405px", width: "956px", borderRadius: "17px", marginLeft: "2px", marginTop: "29px" }} src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
                        </Grid>

                        <Grid align="center" >
                            <Typography variant="caption"> Whether you are a school student or an employee, writing a leave application is a skill
                                that you must know about.<br></br> While we know that one needs to keep a formal tone as well as a precise structure,<br></br>  there are many elements of this document that often get overlooked. Further, it is important to comprehend </Typography>

                        </Grid>
                        <Grid align="center">
                            <img style={{ height: "405px", width: "954px", borderRadius: "14px", marginReft: "71px", marginTop: "29px" }} src="https://images.unsplash.com/photo-1570891836790-2ee7d0e713bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>

                        </Grid>
                    </Grid>

                 </Grid>
            </Box>

        </>
    );
}

export default Drop;