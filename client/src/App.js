import { Container, Paper } from "@mui/material";
import './App.css';
// import { Grid } from "@mat"
// import useStyles from './styles';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/home';
import Questions from "./components/questions/questions";
import AddQuestion from "./components/forms/question/question";
import QuestionDetails from "./components/questions/questionDetails/questionDetails";
import Users from "./components/users/Users";
import User from "./components/users/user/User"
import Footer from "./components/footer/Footer";
import Discussions from "./pages/discussions/Discussions";
import Tags from "./components/tags/Tags";
import Dashboard from "./components/dashboard/DashBoard";
import Auth from "./pages/auth/Auth";
import Signup from "./pages/auth/signup/Signup";
import Signin from "./pages/auth/signin/Signin";
import Navbar from "./pages/home/navbar/Navbar"
import io from "socket.io-client";
import VideoChat from "./pages/VideoChat/VideoChat";
// const socket=io.connect("http://localhost:3001");

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return <>
    {/* <Navbar /> */}
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/discussions/:_id" element={<Discussions /> }/>
      <Route path="/meet/:_id" element={<VideoChat />}/>
      <Route path="/auth/signup" exact element={<Signup />} />
      <Route path="/auth/signin" exact element={<Signin />} />
      <Route exact path="/tags" element={<Tags />} />
      <Route exact path="/questions" element={<Questions />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/users/:_id" element={<User />} />
      <Route exact path="/auth/*" element={!user ? <Auth /> : <Home />} />
      <Route exact path="/questions/ask/*" element={user ? <AddQuestion /> : <Auth />} />
      <Route exact path="/questions/:id" element={<QuestionDetails />} />
      <Route exact path="/questions/search" element={<Home />} />
      <Route exact path="/dashboard/:_id" element={user ? <Dashboard /> : <Auth />} />
      <Route exact path="/doctor" element={user ? <Dashboard /> : <Auth />} />
    </Routes >
     {/* <Footer /> */}
  </>
}

export default App;
