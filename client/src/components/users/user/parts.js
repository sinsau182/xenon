import react , { useState } from "react";
import { CircularProgress, Paper, Typography, Button, TextField } from "@mui/material";
import GreenDot from "@mui/icons-material/AccessTime";
import moment from "moment";
import Member from "@mui/icons-material/CardMembership";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { myQuestions } from "../../../actions/questions";
import Question from "../../questions/question/question";
import EditIcon from "@mui/icons-material/Edit"

const center = {
    diaplay: "flex",
    justifyContent: "center",
    alignItems: "center",
}
export const ProfilePicture = ({ picture }) => {
    return <Paper
        style={{
            // backgroundColor:"grey",
            backgroundImage: `url("${picture}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "200px",
            height: "200px",
        }}>

    </Paper>
}
export const ProfileData = ({ user }) => {
    return <Paper
        style={{
            padding: " 5px 10px"

        }}
        elevation={0}
    >
        <Typography variant="h4" style={{ letterSpacing: "2px", }}>{user?.profile?.name}</Typography>
        <Typography
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px 0"
            }}
        ><Member />Joined {moment(user?.profile?.createdAt).fromNow()} ago</Typography>
        <Typography
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px 0"
            }}
            variant="body2"
        // fullWidth
        >
            <GreenDot /> active {moment(user?.profile?.activeStatus).fromNow()} ago
        </Typography>
    </Paper>
}

export const Stats = ({ stats }) => {
    return <>
        <Paper style={{ width: "200px", display: "flex", gap: "40px", padding: "20px" }}>
            <Paper elevation={0} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography>{stats.myQuestions.length}</Typography>
                <Typography>questions</Typography>
            </Paper>
            <Paper elevation={0} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography>{stats.myAnsweredQuestions.length}</Typography>
                <Typography>answers</Typography>
            </Paper>
        </Paper>
    </>
}
export const About = ({ about }) => {
    // const [editable,setEditable]=useState("false");
    // const [value,setValue]=useState(about);
    return <>
        <Paper style={{ display: "flex", flexDirection: "column", padding: "20px",width:"400px" }}>
            <Typography style={{display:"flex",justifyContent:"space-between"}} variant="h5"> About</Typography>
            <Typography  style={{fontFamily:"sans-serif", fontSize: "15px" }} >{about}</Typography>
        </Paper>
    </>
}
export const MyQuestions = ({ questions,answeredQuestions }) => {
    const { isLoading } = useSelector(state => state.questions);
    const [sortedQuestions,setSortedQuestions]=useState(questions);
    const [activeButton, setActiveButton] = useState("myQuestionsButton");
    useEffect(() => {
        setSortedQuestions(questions);
    }, [questions,answeredQuestions]);
    return <>
        <Paper style={{display:"flex",flexDirection:"column",gap:"10px"}} elevation={0}>
            <Paper style={{display:"flex",gap:"10px",margin:"10px 0"}} elevation={0}>
                <Button variant={activeButton === "myQuestionsButton" ? "contained" : "outlined"} onClick={() => { setActiveButton("myQuestionsButton"); setSortedQuestions(questions) }}>Asked Questions <span style={{position:"relative",width:"20px",height:"20px",borderRadius:"10px",bottom:"20px",left:"20px",backgroundColor:"#FFCA2C",textAlign:"center"}}>{questions.length}</span></Button>
                <Button variant={activeButton === "myAnswersButton" ? "contained" : "outlined"} onClick={() => { setActiveButton("myAnswersButton"); setSortedQuestions(answeredQuestions) }}>Answered Questions <span style={{position:"relative",width:"20px",height:"20px",borderRadius:"10px",bottom:"20px",left:"20px",backgroundColor:"#FFCA2C",textAlign:"center"}}>{answeredQuestions.length}</span></Button>
            </Paper>
            <Paper>
                {isLoading ? <CircularProgress /> : (
                    sortedQuestions.map((question) => <Question key={question._id} question={question} />)
                )}
            </Paper>
        </Paper>

    </>
}




