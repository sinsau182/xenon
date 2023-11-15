import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  mainContainer: {
    padding: "0 20px 20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  heading:{
    fontSize:"27px",
    textTransform:"capitalize",
    padding:"20px 0"
    // lineHeight:"60px",
  },
  description:{
    fontSize:"20px",
    padding:"20px 0 0 0",
    color:"rgb(40,40,40)"
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    display: 'flex',
    borderRadius: "5px 0 0 5px",
    // padding:"20px 0 ",
    margin:"20px 0"
  },
  chipInput:{
    width:"250px",
    borderRadius:"5px 0 0 5px"
    // height:"105px",
    // overflow:"hidden",
  },
  searchButton: {
    //    display:"flex",
    borderRadius:" 0 5px 5px 0",
    width: "20px",
    height: "55px",

  },

  tagButton: {
    margin: "5px",
    fontSize: "12px",
    textTransform: "lowercase",
  },
  suggestions:{
    padding:"0"
  }
}))