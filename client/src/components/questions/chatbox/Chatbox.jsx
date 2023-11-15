import { Box, Paper, TextField, Stack, IconButton, Typography, CircularProgress } from '@mui/material'
import BotIcon from "@mui/icons-material/AccountBoxOutlined"
import React, { useEffect, useState } from 'react'
import "./styles.css"
import doctorIcon from "./doctor.png";
import { useDispatch, useSelector } from "react-redux";
import { ask, fetchDrDuckChat } from '../../../actions/drDuck';
const Chatbox = () => {
   const dispatch = useDispatch();
   const user = JSON.parse(localStorage.getItem('profile'));
   const { authData } = useSelector(state => state.auth);
   const userId = authData?._id;
   const { messages, isLoading, generatingResponse } = useSelector(state => state.drDuck);
   const [message, setMessage] = useState("");
   const handleSubmit = async (e) => {
      if (e.keyCode === 13) {
         try {
            dispatch({ type: "ADD_TO_DRDUCK_CHAT", payload: { content: message, author: "user", timeStamp: new Date().toISOString() } });
            dispatch(ask({ content: message, userId: user?._id }));

         } catch (error) {
            console.log({ error })
         }
         setMessage("");
         const messageBox = document.getElementById("messageBox");
         setTimeout(() => {
            messageBox.scrollTop = messageBox.scrollHeight;
         }, 100)
      }
      return;
   }

   useEffect(() => {
      dispatch(fetchDrDuckChat(userId));
   }, [dispatch, userId]);

   return (
      <>
         <Box className="chatBoxWrapper">
            <Paper sx={{ height: "10vh", backgroundColor: "#23303C", display: "flex", alignItems: "center" }} >
               <Typography variant="h5" style={{ color: "#03DAC5", margin: "10px" }}> Dr Duck</Typography>
            </Paper>
            <Box className="messageBox" id="messageBox" >
               <Stack directio="column" spacing={2}>
                  {isLoading ? <CircularProgress /> : messages?.map((message, index) => <Box
                     kye={index}
                     className="message"
                     style={{ color: message.author === 'bot' ? "#26BE8D" : "#7290AA" }}
                  >
                     <img src={message.author === "bot" ? doctorIcon : user?.picture} alt="Dr. Duck" className='messageIcon' />
                     {message.content}</Box>
                  )}

                  {generatingResponse && <Box className="message" style={{ color: "rgb(150,150,150)" }}>Generating response...</Box>}
               </Stack>
            </Box>
            <Paper sx={{ height: "10vh", backgroundColor: "#23303C" }}>
               <TextField
                  fullWidth
                  value={message}
                  onKeyDown={handleSubmit}
                  sx={{ input: { color: 'rgb(150,150,150)' } }}
                  onChange={e => { setMessage(e.target.value) }}
                  placeholder='Ask to Dr. Duck'
               ></TextField>
            </Paper>
         </Box>
      </>
   )
}

export default Chatbox