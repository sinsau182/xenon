import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import "./styles.css"
import { Button, TextField } from '@mui/material';
// import { clientId } from '../../../components/auth/data';
import { Input, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../actions/auth';


const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [active, setActive] = useState(1);
    const [visible, setVisible] = useState(false);

    const [signupData, setSignUpData] = useState({
        doctor: false,
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        speciality: "",
        registrationNumber: "",
        clinicHospitalName: "",
        phoneNumber: "",
        bio: "",
        yearsOfExperience: null,
    })
    const toggleVisibility = (e) => {
        e.preventDefault();
        setVisible(!visible);
    }

    const handleDoctor = (e) => {
        e.preventDefault();
        setSignUpData({
            ...signupData,
            doctor: !signupData.doctor,
            speciality: "",
            medicalLicenceNumber: "",
            registrationNumber: "",
            phoneNumber: "",
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello")
        dispatch(signup(signupData, navigate));
    }




    return  <>
        <div className="auth">
            {active === 1 && <div className="auth_page" >

                <input type="text" value={signupData.firstName} onChange={e => { setSignUpData({ ...signupData, firstName: e.target.value }) }} placeholder='First Name*' />
                <input type="text" value={signupData.lastName} onChange={e => { setSignUpData({ ...signupData, lastName: e.target.value }) }} placeholder='last Name*' />


            </div>}
            {active === 2 && <div className="auth_page" >


                <input type="email" value={signupData.email} onChange={e => { setSignUpData({ ...signupData, email: e.target.value }) }} placeholder='Email*' />
                <div className='auth_input_password'>
                    <input style={{ borderRadius: "5px 0 0 5px" }} type={visible ? "text" : "password"} value={signupData.password} onChange={e => { setSignUpData({ ...signupData, password: e.target.value }) }} placeholder='password*' />
                    <IconButton style={{ backgroundColor: "white", borderRadius: "0 5px 5px 0" }} >{visible ? <VisibilityIcon onClick={toggleVisibility} /> : <VisibilityOffIcon onClick={toggleVisibility} />}</IconButton>
                </div>
                <input type="password" value={signupData.confirmPassword} onChange={e => { setSignUpData({ ...signupData, confirmPassword: e.target.value }) }} placeholder='Confirm Password*' />

            </div>}
            {active === 3 && <div className="auth_page" >
                <input type="text" value={signupData.bio} onChange={e => { setSignUpData({ ...signupData, bio: e.target.value }) }} placeholder='bio...' />
            </div>
            }
            {active === 4 && <div className="auth_page" >
                <Button color='primary' style={{ width: "88%" }} variant="contained" onClick={handleDoctor}>
                    {signupData.doctor ? "I am not a doctor" : "I am a doctor"}
                </Button>
                {
                    signupData.doctor ?
                        <>
                            <input type="text" value={signupData.speciality} onChange={e => { setSignUpData({ ...signupData, speciality: e.target.value }) }} placeholder="Your Speciality" />
                            <input type="text" value={signupData.registrationNumber} onChange={e => { setSignUpData({ ...signupData, registrationNumber: e.target.value }) }} placeholder="Registration Number" />
                            <input type="text" value={signupData.clinicHospitalName} onChange={e => { setSignUpData({ ...signupData, clinicHospitalName: e.target.value }) }} placeholder="Clinic/Hospital Name" />
                            <input type="number" value={signupData.yearsOfExperience} onChange={e => { setSignUpData({ ...signupData, yearsOfExperience: e.target.value }) }} placeholder="Years of experience" />
                            <input type="text" value={signupData.phoneNumber} onChange={e => { setSignUpData({ ...signupData, phoneNumber: e.target.value }) }} placeholder="Contact Number" />
                        </>
                        :
                        <>

                        </>
                }
            </div>}
            {
                active === 5 && <>
                    <div className="auth_page">
                        <p style={{ color: "white", width: "100%", fontFamily: "Poppins" }}>Enter the OTP sent to given email address. </p>
                        <TextField type="text" fullWidth style={{ backgroundColor: "white" }} />
                        <Button variant='contained' color="primary" >Verify</Button>
                    </div>
                </>
            }
            <div className="operators">
                {active === 1 && <> <Button
                    variant={signupData.firstName && signupData.lastName ? "contained" : "outlined"}
                    color='primary'
                    onClick={e => {
                        e.preventDefault();
                        if (signupData.firstName && signupData.lastName) {
                            setActive(active + 1);
                        } else {
                            alert("Fill up all the required fields.");
                        }
                    }}

                >Next</Button>
                    <p style={{ color: "white", fontSize: "16px", width: "100%", fontFamily: "Roboto" }}>Already have an account <Link style={{ color: "white" }} to="/auth/signin">Signin</Link></p>
                    </>
                    }
                    {
                        active === 2 && <>
                            <Button variant='outlined' style={{ backgroundColor: "white" }} onClick={e => { e.preventDefault(); setActive(active - 1); }} >Back</Button>
                            <Button
                                variant={signupData.email && signupData.password && signupData.confirmPassword ? "contained" : "outlined"}
                                color='primary'
                                onClick={e => {
                                    e.preventDefault();
                                    if (signupData.email && signupData.password && signupData.confirmPassword && signupData.password === signupData.confirmPassword) {
                                        setActive(active + 1);
                                    } else if (signupData.password !== signupData.confirmPassword) {
                                        alert("Passwords don't matched.");
                                    } else {
                                        alert("Fill up all the required fields.");
                                    }
                                }}
                            >Next</Button>
                        </>
                    }
                    {/* {active !== 1 && <Button variant="outlined" onClick={e => { e.preventDefault(); setActive(active - 1) }}>back</Button>} */}
                    {active === 3 && <>
                        <Button variant='outlined' style={{ backgroundColor: "white" }} onClick={e => { e.preventDefault(); setActive(active - 1) }} >Back</Button>
                        <Button variant='outlined' style={{ backgroundColor: "white" }} onClick={e => { e.preventDefault(); setActive(active + 1); setSignUpData({ ...signupData, bio: "" }) }} >Skip</Button>
                        {signupData.bio &&
                            <Button variant='contained' color="primary" onClick={e => { e.preventDefault(); setActive(active + 1) }} >Next</Button>
                        }
                    </>
                    }
                    {active === 4 && <>

                        <Button
                            variant='outlined'
                            style={{ backgroundColor: "white" }}
                            onClick={e => { e.preventDefault(); setActive(active - 1) }}

                        >Back</Button>
                        {
                            signupData.doctor ? <>
                                {signupData.speciality && <Button
                                    variant='contained'
                                    color="primary"
                                    onClick={handleSubmit}
                                    >Submit</Button>}
                            </> :
                                <Button
                                   onClick={handleSubmit}
                                    variant='contained'
                                    color="primary"
                                >Submit</Button>
                        }
                    </>
                    }
                </div>
            </div>
        </>
            
}

        export default Signup