import { makeStyles } from "@mui/styles";
export default makeStyles(()=>({
    mainContainer:{
        // border:"1px solid grey",
        width:"62vw",
        alignItems:"flex-start",
        display:"flex",
        gap:"10px",
        flexWrap:"wrap",
    },
    profile:{
        // backgroundColor:"grey",
        display:"flex",

    },
    picture:{
        //  border:"2px solid red",
         width:"250px",
         height:"200px",
         backgroundPosition:"center",
         backgroundRepeat:"no-repeat",
         backgroundSize:"cover",

    },
    info:{

    }
}));