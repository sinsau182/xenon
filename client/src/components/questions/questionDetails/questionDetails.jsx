import react, { useState } from 'react'
import { useEffect } from 'react';
import Divider from "@mui/material/Divider";
import { Link } from 'react-router-dom';
import { Avatar } from "@mui/material"
import moment from 'moment';
import FileBase from "react-file-base64"
import VoteIcon from "@mui/icons-material/FavoriteBorder"
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { CircularProgress, Button, TextField, Paper, Typography, } from '@mui/material';
import  "./styles.css";
import VotedIcon from "@mui/icons-material/Favorite";
import { addAnswer, addVote } from '../../../actions/questions';
import { getQuestion } from '../../../actions/questions';
import Navbar from '../../../pages/home/navbar/Navbar';
const QuestionDetails = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [answer, setAnswer] = useState({ answer: "", files: [] })
  const { question, isLoading, addingAnswer } = useSelector(state => state.questions);
  const [fileSStyles, setFilesStyles] = useState({ files: {width: "100%",overflowX: "auto",display: "flex",padding: "10px 0" },file: {height: "70vh"    }})
  const clear = () => { setAnswer({ answer: "", files: [] }) };
  const dispatch = useDispatch();
  const { id } = useParams();
  // window.location.relaod();
  // let v=1;
  useEffect(() => {
    dispatch(getQuestion(id));
    // window.location.reload();
  }, [id])
  return <>
   <Navbar />
    {isLoading? <Paper elevation={6} className="loadingPaper">
      <CircularProgress size="7em" />
    </Paper> :
      <div className="questionWrapper" >
        <div className="question">
          <Typography variant="h3" sx={{fontSize:"24px"}} className="title">{question?.title}</Typography>
          <Typography variant="h6" className="details">{question?.question}</Typography>
          <div className="tags">
            <Typography variant="body2" color="textSecondary">{question?.tags?.map((tag) => (<span key={tag} className="span">{tag}</span>))}</Typography>
          </div>
        </div>
        <Paper className="filesStyles" elevation={0} >
         {question ? <>{question?.files?.map((file, index) => <img key={index} src={file}  className="question_file" />)}</>:""}
        </Paper>
        <div className="status">
          <Typography variant="body2" className="statusElement" >
            {question?.votes?.find(vote => vote === (user?._id))
              ? <VotedIcon onClick={() => { dispatch(addVote({ questionId: question._id, userId: user._id })) }} />
              : <VoteIcon onClick={() => { user ?dispatch(addVote({ questionId: question._id, userId: user._id })) : navigate("/auth") }} />
            }
            {question?.votes?.length} {question?.votes?.length === 1 ? "Vote" : "Votes"}</Typography>
          <Typography variant="body2" className="statusElement">{question?.answers?.length > 1 ? `${question?.answers?.length} answers` : `${question?.answers?.length} answer`}</Typography>
          {/* <Typography variant="body2"></Typography>      */}
        </div>
        <div className="userAndDate">
          <Avatar className="purple" alt={question?.name} src={question?.picture}>{question?.name?.charAt(0)}</Avatar>
          <Typography variant="body2" className="name" onClick={() => { navigate(`/users/${question?.creator}`) }}>{question.name}</Typography>
          <Typography variant="body2" className="name">{moment(question?.createdAt).fromNow()}</Typography>

        </div>
        <div className="answers">
          <Typography variant="body2" style={{ margin: "20px 0" }}>{`${question?.answers?.length}`} {question?.answers?.length === 1 ? "Answer" : "Answers"}</Typography>
          <div>
            {question?.answers?.map((answer, index) =>
              <Paper className="answer" key={index} >
                <Paper elevation={0}>{answer.answer}</Paper>
                <Paper className="filesStyle" elevation={0} >
                  {answer.files.map((file, index) => <img key={index} src={file} className="answer_file" elevation={4} />)}
                </Paper>
                <div className="answerDetails">
                  <Avatar className="purple" alt={answer?.name} src={answer?.picture}>{question?.name?.charAt(0)}</Avatar>
                  <Typography variant="body2" className="name" onClick={(e) => { e.preventDefault(); navigate(`/users/${question.creator}`) }}>{answer.name}</Typography>
                  <Typography variant="body2" className="name">{moment(answer.createdAt).fromNow()}</Typography>
                </div>
              </Paper>
            )}
          </div>
          <Paper className="addAnswer" >
            <TextField
              name="answer"
              multiline
              variant="outlined"
              label="Answer"
              // style={{height:"100px"}}
              inputProps={{
                style: {
                  height: "150px",
                },
              }}
              fullWidth
              value={answer.answer}
              onChange={(e) =>
                setAnswer({ ...answer, answer: e.target.value })
              }
            />
            <div className="fileInput">
              <FileBase
                type="file"
                multiple={true}
                onDone={(data) => {
                  var files = [];
                  data.map((data) => {
                    files = [...files, data.base64];
                  });
                  setAnswer({ ...answer, files: files });
                  // console.log(answer);
                }}
              />
            </div>
            <Button
              className="buttonSubmit"
              // type="submit"
              onClick={(e) => { e.preventDefault(); dispatch(addAnswer({ id, answer, creator: user })); clear() }}
              color={addingAnswer ? "secondary" : "primary"}
              variant="contained"
              size="large"
              fullWidth
            >
              {addingAnswer ? <CircularProgress /> : (!user ? "SIGNIN TO ANSWER" : "ADD ANSWER")}
            </Button>

            {/* </form> */}
          </Paper>
        </div>
      </div>
    }
  </>
}

export default QuestionDetails