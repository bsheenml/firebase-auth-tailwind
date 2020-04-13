
import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./providers/UserProvider";
import Application from "./Components/Application";
import ProfilePage from "./Components/ProfilePage";



function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;