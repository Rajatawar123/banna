
import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Avatar, Grid, Paper, TextField, Button, Typography} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {
    DatePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const paperStyle = { padding: "17px", width: 382, margin: '45px auto' }
const AvtarStyle = { backgroundColor: "green" }
const LoginStyle = {}
const buttonStyle = { align: "center", paddingInline: "129px", marginLeft: "-6px", marginTop: '12px' }

const Apply_Leave = () => {
    const [age, setAge] = React.useState('');
    const [selectedDate, handleDateChange] = useState(new Date());
    const [endDate, handleEndChange] = useState(new Date());




    const handleChange = (event) => {
        setAge(event.target.value);
    };



    return (
        <>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={AvtarStyle}>

                        </Avatar>
                        <h1 style={LoginStyle}>Apply For Leave</h1>
                      
                    </Grid>

                    <form>

                        <TextField fullWidth label="To"
                        
                                           />
                       
                        <TextField fullWidth label="Phone"
                        />

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

                            <InputLabel id="demo-simple-select-standard-label">Positions</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                fullWidth label="Positions"
                            >
                                <MenuItem value="">
                                    <em>HR</em>
                                </MenuItem>
                                <MenuItem value={10}>Senior</MenuItem>
                                <MenuItem value={20}>Junior</MenuItem>
                                <MenuItem value={30}>Trenee</MenuItem>
                            </Select>
                        </FormControl>   <br></br>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

                            <InputLabel id="demo-simple-select-standard-label"> type for leave</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Positions"
                            >
                                <MenuItem value="">

                                </MenuItem>
                                <MenuItem value={10}>Emergency Leave</MenuItem>
                                <MenuItem value={20}>Annual Leave</MenuItem>
                                <MenuItem value={30}>Paid Leave</MenuItem>
                                <MenuItem value={30}>Casual Leave </MenuItem>
                            </Select>
                        </FormControl> 
                           <br></br>
                    
                        <MuiPickersUtilsProvider utils={DateFnsUtils} label="start">
                            <DatePicker variant="inline"
                                fullWidth label="Start Date"
                                value={selectedDate} onChange={handleDateChange} />
                        </MuiPickersUtilsProvider>


                        <MuiPickersUtilsProvider utils={DateFnsUtils} label="start">
                            <DatePicker variant="inline"
                                fullWidth label="End Date"
                                value={endDate} onChange={handleEndChange} />
                        </MuiPickersUtilsProvider>
     
                        <TextField fullWidth label="Reason"
                        />
                        <Button style={buttonStyle} type="submit" variant="contained"
                            color="primary">Leave Apply</Button>
                    </form>
                </Paper>
            </Grid>

        </>
    )
}

export default Apply_Leave;