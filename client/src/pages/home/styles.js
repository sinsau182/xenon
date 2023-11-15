import {colors} from "../../assets/colors";

import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    home:{

        // backgroundColor:colors.blue,
        // minHeight:"100vh", 
        // display:"flex",
        // justifyContent:"center",  
     },
     home_navbar:{
        // width:"100%",
        height:'10vh',
        backgroundColor:colors.blue,
     },
     home_intro:{
    //    backgroundColor:colors.green,
       height:"90vh",
     },

     home_intro_text:{
        // margin:"auto",
         position:"absolute",
          
     },
     home_intro_slogan:{
        fontFamily:"Ubuntu",
        textAlign:"center",
        // margin:"0",
     },
     home_intro_aboutText:{
        fontFamily:"Roboto",
        fontSize:"20px",
        color:"rgb(93,108,116)",
        // textAlign:"center",
     },

     home_intro_features:{
        listStyleType:"none",

     },
     home_intro_feature:{
        width:"200px",
            
     },
     home_intro_features_paper:{
        // backgroundColor:"grey",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
     },

    //  home_intro_feature:


     
})) 