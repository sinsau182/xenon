import React from 'react'
import {Stack,Box, Button, Paper,IconButton } from '@mui/material'
import MessageIcon from "@mui/icons-material/MessageOutlined"
import AppointmentIcon from "@mui/icons-material/MeetingRoomOutlined"

const Navbar = () => {
    return (
        <>
            <Box sx={{height:"70px",display:"flex",backgroundColor:"rgba(0,0,0,0.1)"}}>
                {/* <Paper > */}
                   <Stack direction="horizontal">
                     <Button>Appointments</Button>
                     <Button>Message</Button>
                     <Button>Reminders</Button>
                    </Stack>   
                {/* </Paper> */}
            </Box>

        </>
    )
}

export default Navbar