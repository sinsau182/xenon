import React from "react";
import { Grid} from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getQuestions } from "../../actions/questions";
import Features from "./features/Features";
import "./styles.css";
import Intro from "./intro/Intro";
import Navbar from "./navbar/Navbar";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  // const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions({ sortedBy: 'all' }));
  }, [dispatch]);

  return (
    <>
      <Grid
        container
        md={12}
      >
        <Navbar />
        <Intro />
        <Features />
        <Contact />
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
