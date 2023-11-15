import React from 'react'
import "./styles.css";
import { Grid, Paper, Button, IconButton } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import VideoCallIcon from "@mui/icons-material/Videocam";
import VaultIcon from "@mui/icons-material/Lock" ;
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import MembersIcon from "@mui/icons-material/Group";
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const authData=JSON.parse(localStorage.getItem('profile'));
    const navigate=useNavigate();
    return (
        <>
            <Grid
                item
                md={12}
                className="home_intro"
            >

                <Paper
                    elevation={0}
                    style={{
                        backgroundColor: "#F9EBFF",
                        position: "absolute",
                        left: "50%",
                        top: "25%",
                        transform: "translate(-50%)",
                        width: "30%",
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                    }}
                >
                    <h1 className="home_intro_slogan">
                        "Empowering healthcare through innovation and collaboration"
                    </h1>
                    <h4 className="home_intro_aboutText">
                        Welcome to Medverse, where healthcare meets innovation. Connect with doctors, get answers to your queries and receive quality care at your fingertips.
                    </h4>
                    <Button size="large" variant="contained" style={{ backgroundColor: "#001E2B", color: "white", }} onClick={()=>{navigate(`/questions`)}} >Explore</Button>
                </Paper>
                <ul className="home_intro_features">
                    <li className="home_intro_feature" >
                        <div
                            className="home_intro_features_paper">
                            <IconButton size="small"><MembersIcon /></IconButton>
                            <p>Real time collaboration between doctors. </p>
                        </div>
                    </li>
                    <li className="home_intro_feature">
                        <div
                            className="home_intro_features_paper">
                            <IconButton size="small" onClick={()=>{navigate(authData ?`/discussions/${authData?._id}`:"auth/signup")}}><MessageIcon /></IconButton>
                            <p>Instant messaging between patient and doctors. </p>
                        </div>
                    </li>
                    <li className="home_intro_feature">
                        <div
                            className="home_intro_features_paper">
                            <IconButton size="small" onClick={()=>{navigate(authData ?`/meet/${authData?._id}`:"auth/signup")}}><VideoCallIcon /></IconButton>
                            <p>Live time Video consulting </p>
                        </div>
                    </li>
                    <li className="home_intro_feature">
                        <div
                            className="home_intro_features_paper">
                            <IconButton size="small"><VaultIcon /></IconButton>
                            <p>Secure data storage and privacy protection.</p>
                        </div>
                    </li>
                    <li className="home_intro_feature">
                        <div
                            className="home_intro_features_paper">
                            <IconButton size="small" onClick={()=>{navigate("/questions")}}><QuestionAnswerIcon /></IconButton>
                            <p>Solve queries , Public questions & answers</p>
                        </div>
                    </li>
                </ul>
            </Grid>
        </>
    )
}

export default Features