import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../../actions/users';
import {  CircularProgress, Container, Paper, Typography } from "@mui/material";
import { ProfilePicture, ProfileData, Stats, About, MyQuestions } from "./parts";
import { getMyQuestions, getMyAnsweredQuestions } from '../../../actions/questions';
const User = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { user, isloading } = useSelector(state => state.users);
  const { myQuestions, myAnsweredQuestions } = useSelector(state => state.questions);
  useEffect(() => {
    dispatch(getUser(_id));
    dispatch(getMyQuestions(_id));
    dispatch(getMyAnsweredQuestions(_id));
  }, [_id])
  return <>
    {isloading ? <CircularProgress /> : <>
      <Container >
        <Paper elevation={6} style={{ display: "flex" }}>
          <ProfilePicture picture={user?.profile?.picture} />
          <ProfileData user={user} />
        </Paper>
        <Paper elevation={0} style={{ padding: "20px 0", display: "flex", gap: "20px" }}>
          {!myQuestions || !myAnsweredQuestions ? <CircularProgress /> :
            <Stats stats={{ myQuestions, myAnsweredQuestions }} />
          }
          <About about={user?.about} />
        </Paper>
        {!myQuestions || !myAnsweredQuestions ? <CircularProgress /> :
          <MyQuestions questions={myQuestions} answeredQuestions={myAnsweredQuestions} />
        }
      </Container>
    </>}
  </>
}

export default User;