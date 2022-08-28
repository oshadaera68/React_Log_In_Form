import React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TextField  from "@mui/material/TextField";
import './login.css'

const LogIn = () =>{
    return(
        <div className="fill__container">
        <div className="login__cover">
            <div className='title__container'>
                <Typography variant="h4" fontFamily="comfortaa" gutterBottom component="div">
                    Log In Form
                </Typography>
            </div>
            <div className='form__container'>
            <TextField id="standard-basic" className='text1' style={{left:'2vh', width:'34vh'}} size='small' label="User Name" variant="standard" />
            <TextField id="standard-basic" className='text2' style={{left:'2vh', width:'34vh'}} type='password' label="Password" variant="standard" />
            </div>
            <div className='btn__container'>
                <Button variant="contained" className='btn' color='success'>Log in</Button>
            </div>  
        </div>  
    </div>
    );
}

export default LogIn