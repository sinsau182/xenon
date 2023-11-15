import React from 'react';
import {Routes,Route} from "react-router-dom";

const Auth = () => {
  return (
    <>
    <Routes>
        <Route path="/signin" exact  />
        <Route path="/signup" exact   />
    </Routes>
    </>
  )
}

export default Auth