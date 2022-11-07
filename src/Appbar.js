import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from "react-router-dom"
import './Appbar_css.css'
const paperStyle = {
    padding: "17px", width: 1339, margin:
        'px auto', marginLeft: "-17px", marginTop: "-17px"
}
const AvtarStyle = { backgroundColor: "green" }
const Appbar = () => {

    const [logo, setLogo] = React.useState(null);
    const [open, setOpen] = React.useState(null);
    const [data, setData] = React.useState(null);
    const handleLogoClick = (event) => {
        setLogo(event.currentTarget);
    }

    const handleOpenClose = () => {
        setOpen(null);
    };
    const handleOpenClick = (event) => {
        setOpen(event.currentTarget);
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
                                        <Avatar src="log.jpeg"></Avatar>
                                    </Button>
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                                    <Button aria-controls="simple-menu" aria-haspopup="true"
                                        onClick={handleOpenClick} style={{ color: "white" }}>
                                        <Avatar style={AvtarStyle}>
                                            <Avatar alt="Remy Sharp" src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
                                        </Avatar>

                                    </Button>
                                </Typography>


                                <Menu
                                    id="simple-menu"
                                    anchorEl={open}
                                    keepMounted
                                    open={Boolean(open)}
                                    onClose={handleOpenClose}

                                >
                                    <MenuItem onClick={show}>
                                        <Button onClick={() => navigate("/login")}>Login</Button></MenuItem>
                                    <MenuItem onClick={handleOpenClose} style={{ color: "black !immortant" }} >
                                        <Button onClick={() => navigate("/SignUPForm")}>SignUp </Button> </MenuItem>

                                </Menu>
                            </Toolbar>
                        </AppBar>
                        <Grid elevation={20} style={paperStyle}>
                            <Grid sx={12} sm={12} align="center" style={{ color: "rebeccapurple", background: "white" }}>
                                <div className="HeroSection row">
                                    <div class="col-md-7 HeroSectionText">
                                        <div className="label_css">
                                            <h3>
                                                Affordable and Reliable service
                                            </h3>
                                            <h5>
                                                Developement Service
                                            </h5>
                                            <p class="textWrap">
                                                “We help you turn your ideas into reality” Whether you’re a start-up on the verge of something great looking for a refresh, our full-service capabilities will allow you to reimagine the way you do digital.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                    </div>
                                </div>
                                <div class="HelpSupport container-fluid row">
                                    <div class="col-md-7 HelpText">
                                        <h2>
                                            Help and Support
                                        </h2>
                                        <p class="Addr" >
                                            3nd floor, Building No. 214,
                                            214, Princess Business Skypark,
                                            Vijay Nagar. Indore - Madhya Pradesh, 452011
                                        </p>
                                        <div class="EmailIcon">
                                            <div class="mail">
                                                <img style={{ marginLeft: "235px" }} src="" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <img class="img_css" src="logo6.png" />
                            </Grid>

                            <div class="Technology">

                                <div class="TechLan">
                                    <h2>
                                        This is Our Working Technology
                                    </h2>
                                    <div class="Languages">
                                        <div class="techImg">
                                            <a href="https://guides.rubyonrails.org/getting_started.html"><img src="rails1.png" alt="" /></a><br></br>
                                            <p>Rails</p>
                                        </div>

                                        <div class="techImg">
                                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="Js.png" alt="" />
                                            </a>
                                            <p>Javascript</p>
                                        </div>
                                        <div class="techImg">
                                            <a href="https://reactjs.org/docs/getting-started.html"> <img src="React.png" alt="" /></a>

                                            <p>React</p>
                                        </div>
                                        <div class="techImg">
                                            <a href="https://www.php.net/docs.php">   <img src="Php.png" alt="" /></a>

                                            <p>PHP</p>
                                        </div>
                                        <div class="techImg">
                                            <a href="https://docs.oracle.com/en/java/"> <img src="java.png" alt="" /></a>

                                            <p>Java</p>
                                        </div>
                                        <div class="techImg">
                                            <a href="https://sanskar9000.github.io/htmlPortfolio/links.html">   <img src="Swift.png" alt="" /></a>

                                            <p>Swift</p>
                                        </div>
                                        <div class="techImg">
                                            <a href="https://laravel.com/docs/9.x/installation">  <img src="Laravel.png" alt="" /></a>

                                            <p>Laravel</p>
                                        </div>
                                        <div class="techImg">
                                            <a href="https://nodejs.org/en/docs/">  <img src="Nodejs.png" alt="" /></a>
                                            <p>Node.js</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="map">
                                <iframe style={{ height: "450px", border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2286.035564284951!2d75.88220501821915!3d22.71101904397362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb37f2a17ca03b943!2sDev%20Ripples!5e0!3m2!1sen!2sin!4v1665578779786!5m2!1sen!2sin"
                                ></iframe>
                            </div>
                            <div class="Footer">
                                <div class="LogoImg">
                                    <img src="dev.png" alt="dev.png" />
                                </div>
                                <div class="copyright">
                                    <p style={{ marginRight: "29px" }}>Copyright ©, 2022 All rights reserved. DevRipples</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Appbar;