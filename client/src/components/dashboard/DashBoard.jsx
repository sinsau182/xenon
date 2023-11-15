import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../actions/users';
import { TextField, Button, CircularProgress, Container, Paper, Typography } from "@mui/material";
import { ProfilePicture, ProfileData, Stats, About, MyQuestions } from "./parts";
import { getMyQuestions, getMyAnsweredQuestions } from '../../actions/questions';
import { editProfile, getMe } from "../../actions/users";
import FileBase from "react-file-base64";
import EditIcon from "@mui/icons-material/Edit"
import Navbar from '../../pages/home/navbar/Navbar';
const DashBoard = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { me, isloading } = useSelector(state => state.users);
  const { myQuestions, myAnsweredQuestions } = useSelector(state => state.questions);
  const loading = useSelector(state => state.questions.isloading);
  const [editing, setEditing] = useState(false);
  const [about, setAbout] = useState(me?.about);
  const [profilePicture, setProfilePicture] = useState(me?.profile?.picture);
  const edit = () => {
    dispatch(editProfile({ _id, picture: profilePicture, about: about }));
  }
  useEffect(() => {
    // dispatch(getUser(_id));
    dispatch(getMe({_id,navigate}));
    dispatch(getMyQuestions(_id));
    dispatch(getMyAnsweredQuestions(_id));
  }, [_id])
  return <>
    <Navbar />
    {isloading ? <CircularProgress /> : <>
      <Container >
        <Paper elevation={6} style={{ display: "flex" }}>
          <ProfilePicture picture={profilePicture || me?.profile?.picture} />
          <ProfileData user={me} />
          {editing ? <Paper style={{ display: "flex", padding: "0 20px", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
            <TextField value={about} onChange={(e) => { setAbout(e.target.value) }} variant="outlined" label="About" />
            <Paper>
              <Typography variant='body2'>Change Profile Picture</Typography>
              <FileBase
                type="file"
                multiple={false}
                onDone={(data) => { setProfilePicture(data.base64); }}
              />
            </Paper>
            <Button variant='contained' color='primary' onClick={() => { edit(); setEditing(false) }}>Save</Button>
          </Paper> : <EditIcon style={{ position: "relative", top: "15px", left: "200px" }} onClick={() => { setEditing(true) }} />}
        </Paper>
        <Paper elevation={0} style={{ padding: "20px 0", display: "flex", gap: "20px" }}>
          {loading || !myQuestions || !myAnsweredQuestions ? <CircularProgress /> :
            <Stats stats={{ myQuestions, myAnsweredQuestions }} />
          }
          <About about={about || me?.about} />
        </Paper>
        {loading || !myQuestions || !myAnsweredQuestions ? <CircularProgress /> :
          <MyQuestions questions={myQuestions} answeredQuestions={myAnsweredQuestions} />
        }
      </Container>
    </>}
  </>
}

export default DashBoard;