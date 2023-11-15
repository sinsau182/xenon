import React, { useState } from 'react'
import { TextField, Paper, Button, Typography,  } from '@mui/material'
import "./styles.css"
import Done  from "@mui/icons-material/Done"
// import { useAlert } from 'react-alert'
import { saveContactMessage } from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
const Contact = () => {
    // const alert=useAlert();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [formMessage, setFormMessage] = useState("");
    // messageSent && alert.show("Message sent."); 
    const { messageSent } = useSelector(state => state.users);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setFormMessage("All fields are required");
            return
        }
        dispatch(saveContactMessage(formData));
    }
    return (
        <div className='contact_form_wrapper' >
            <Paper className="contact_form" elevation={5}>
                
                <Typography style={{ height: "20px", color: "red" }} variant='body2' >{formMessage}</Typography>
                <TextField value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} placeholder='Name' fullWidth variant='standard' />
                <TextField value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} placeholder='Email' fullWidth variant='standard' />
                <TextField value={formData.message} onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }} placeholder='Message' fullWidth variant='standard' />
                <Button variant='contained' type='primary' size='large'
                    onClick={handleSubmit}
                >{messageSent ? <Done />:"Send"}</Button>

            </Paper>

        </div>
    )
}

export default Contact