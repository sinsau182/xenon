import { CircularProgress, Paper, Button, Container, Grid, Typography, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search"
import { useDispatch, useSelector } from "react-redux";
import  "./styles.css";
import { getUsers, getUsersBySearch } from '../../actions/users';
import nouser from "./noUser.png";
import { useSearchParams } from 'react-router-dom';
const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { users, isLoading } = useSelector((state) => state.users);
  const searchUsers = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(getUsersBySearch(search));
    } else {
      navigate("/users");
    }
  }
  const userProfile = (id) => {
    navigate(`/users/${id}`);
  }
  // console.log(users);
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  return (
    <Container lg={12} >
      <Paper className="mainContainer">

        <Paper className="searchBar" elevation={8}>
          <TextField value={search} variant="outlined" onChange={(e) => { setSearch(e.target.value) }} label="Search User" />
          <Button onClick={searchUsers} variant="contained" className="searchButton"><SearchIcon /></Button>
        </Paper>
        <Paper className="users">
          {isLoading ? (<CircularProgress />) : (
            users.map((user,index) => <Paper key={index} elevation={6} className="paper">
              <img src={user.profile?.picture} className="picture" alt="image" />
              <div className="intro">
                <Typography variant='h5' onClick={() => userProfile(user._id)} className="name">{user.profile.name}</Typography>
                <Typography variant='body2' className="email">{user.email}</Typography>
                <Typography variant='body2' className="moment">Joined {moment(user.profile?.createdAt).fromNow()}</Typography>
              </div>
            </Paper>
            ))}
          {!users.length && !isLoading ? <div className="noUsers"><img width="100px" src={nouser} alt="" /><Typography variant='body2'>No user found.</Typography></div> : ""}

        </Paper>
      </Paper>
    </Container>
  )
}

export default Users