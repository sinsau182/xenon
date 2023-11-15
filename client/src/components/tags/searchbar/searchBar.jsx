import React, { useEffect, useState } from 'react'
import { Container, TextField, Button, Paper, Typography } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MuiChipsInput } from "mui-chips-input";
import useStyles from "./styles"
import { getQuestions, getQuestionsBySearch } from '../../../actions/questions';
import SearchIcon from "@mui/icons-material/Search";
const defaultSuggestions = ["pain", "suffering","drinking","colddrink","cock","pepsi","cola",
"yoga","care","motivation","ayurveda","safe",'happy',"focus","green","health","hurt", "leg", "paisa", "money", "bone", "headache", "tension"]


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [suggestions,setSuggestions]=useState([]);

  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchQuestions();
    }
  }
  const searchQuestions = () => {
    // e.preventDefault();
    if (search.trim() || tags) {
      // console.log("ewqjkuf gb")
      dispatch(getQuestionsBySearch({ search, tags: tags.join(',') }));
      setSuggestions([]);
    } else {
      navigate("/tags");
    }
  }
 
  useEffect(()=>{
    setSuggestions(defaultSuggestions);
  },[])

  const onDelete = (tagToDelete) => { setTags(tags.filter(tag => tag !== tagToDelete)) };
  const onAdd = (tag) => { setTags([...tags, tag]) };
  // const query=useQuery();  
  return <>
    <Container className={classes.mainContainer}>
      <Typography variant="h4" className={classes.heading}>tags</Typography>
      <Typography variant="body2" className={classes.description}>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</Typography>
      <Paper className={classes.searchBar} elevation={6}>
        <MuiChipsInput
          styles={{ margin: "10px 0" }}
          value={tags}
          onAdd={onAdd}
          onDelete={onDelete}
          label="Search Tags"
          variant='outlined'
          className={classes.chipInput}
        />
        <Button onClick={searchQuestions} variant="contained" className={classes.searchButton} color="default"   ><SearchIcon /></Button>
      </Paper>
      <Container  className={classes.suggestions} >{suggestions.map((suggestion,index) => <Button key={index} className={classes.tagButton} variant='contained' onClick={()=>setTags([...tags,suggestion])} >{suggestion}</Button>)}</Container>
    </Container>

  </>

}

export default SearchBar