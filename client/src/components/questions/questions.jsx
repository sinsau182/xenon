import React, { useCallback, useEffect, useState } from "react";
import { CircularProgress, Paper, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Question from "./question/question";
// import useStyles from './styles';
import { Grid } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import Chatbox from "./chatbox/Chatbox";
import { getQuestions } from "../../actions/questions";
// import NoResultIocn from "@mui/icons-material/result"


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Questions = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const searchQuery = query.get('searchQuery');
    const page = query.get('page') || 1;
    const tags = query.get('tags');
    // const classes = useStyles();
    const [activeButton, setActiveButton] = useState("allQuestionsButton");
    const navigate = useNavigate();
    const [sortedBy, setSortedBy] = useState("all");
    const { questions, isLoading } = useSelector((state) => state.questions);
    // const votedQuestions=
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(getQuestions({ page: 1 }));
        // setSortedQuestions(questions);
    }, [])
    return <>
        <Grid container md={12} style={{ backgroundColor: "#1A2734", height: "100vh", overflow: "hidden" }}>
            <Grid item md={2}>
                <Sidebar />
            </Grid>
            <Grid item md={6.5} sx={{overflow:"auto",height:"100vh"}}>
                    {questions.map((question) => <Question key={question._id} question={question} />)
                    }
            </Grid>
            <Grid item md={3.5}>
                <Chatbox />
            </Grid>
        </Grid>
    </>
}

export default Questions;