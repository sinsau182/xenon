import { Box,Button,Typography,Stack,TextField,IconButton } from '@mui/material'
import React from 'react'
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from "../home.png"
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <>
      <Box sx={{backgroundColor:"#23303C",height:"100vh"}}>
        <Stack 
        direction="column"
         sx={{padding:"20px 0"}} 
         spacing={2}
         alignItems="center"
         >
               {/* <h1>Medverse</h1> */}
               <Stack 
                // variant="h1" 
                justifyContent="center"
                alignItems="center"
                direction="row"
                onClick={e=>{navigate("/")}}
               sx={{cursor:"pointer",letterSpacing:"2px", fontSize:"30px",fontFamily:"Ubuntu",color:"#03DAC5",gap:"10px"}} 
               >
                <img src={HomeIcon} alt="home" style={{width:"28px",height:"28px"}} />
                Medverse</Stack>
               <TextField size='small' 
               sx={{input:{color:"rgb(150,150,150)"},width:"90%",backgroundColor:"#1A2734",borderRadius:"5px"}} 
               placeholder='Search'

               />
                <Stack className='questions_sidebar_navItem'  onClick={()=>{navigate('/questions')}}>questions</Stack> 
                {/* <Stack className='questions_sidebar_navItem' onClick={()=>{navigate('/questions/tags')}}>tags</Stack>  */}
                <Stack className='questions_sidebar_navItem' onClick={()=>{navigate('/users')}}>users</Stack> 
                <Stack className='questions_sidebar_navItem'><Button variant="contained" onClick={()=>{navigate('/questions/ask')}}>Ask Question</Button></Stack> 
        </Stack>
      </Box>
    </>
  )
}

export default Sidebar