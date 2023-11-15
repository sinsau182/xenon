import React, { useState } from 'react';
import { Input, InputAdornment, Button, IconButton, TextField, CircularProgress } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link, useNavigate } from "react-router-dom"
import "./styles.css";
import {useDispatch, useSelector} from "react-redux";
import {signin} from "../../../actions/auth";


const Signin = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  })
   const {signingin}=useSelector(state=>state.auth);
  const [visible, setVisible] = useState(false);
  const toggleVisibility = (e) => {
    e.preventDefault();
    setVisible(!visible);

  }
  const submit = () => {
    console.log({ signinData });
    dispatch(signin(signinData,navigate));

  }

  return (
    <div className="auth">
      <div className="auth_signin">
        <TextField
          type="email"
          placeholder='Email'
          fullWidth
          value={signinData.email}
          onChange={e => { setSigninData({ ...signinData, email: e.target.value }) }}
          // size='large'
          style={{
            backgroundColor: "white",
            // padding: "10px 0px",
            borderRadius: "5px",
          }}
        />


        <TextField
          fullWidth
          type={visible ? 'text' : 'password'}
          style={{
            backgroundColor: "white",
            // padding: "10px 0px",
            borderRadius: "5px",
          }}
          placeholder='Password'
          value={signinData.password}
          onChange={e => { setSigninData({ ...signinData, password: e.target.value }) }}
          // variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleVisibility}>
                  {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button
          fullWidth
          variant={signingin ? "outlined":"contained"}
          color="primary"
          onClick={submit}
        >{signingin ? <CircularProgress />:"Signin"}</Button>
        <p style={{ color: "white", fontSize: "16px", width: "100%", fontFamily: "Roboto" }}>Don't have an account <Link style={{ color: "white" }} to="/auth/signup">Signup</Link></p>
      </div>
    </div>
  )
}

export default Signin