import React from 'react'
import Navbar from "../home/navbar/Navbar"
import { Grid, Stack ,IconButton,Button} from '@mui/material';
// import Navbar from './navbar/Navbar';
import "./styles.css"
const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    // console.log({user});
    return (
        <>
            <Grid container>
                <Grid md={12} item>
                    <Navbar />
                </Grid>
                <Grid item md={2} className="sidebar">
                    <Stack direction="row" 
                    sx={{
                        overflowY:"auto",
                        height:{sx:'auto',md:"95%"},
                        flexDirection:{md:"column"},
                    }}
                    >
                        <Button></Button>
                         {/* <li><IconButton></IconButton>Appointments</li> */}
                         {/* <li><IconButton></IconButton>Appointments</li> */}
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard