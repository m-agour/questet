import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./Pages/Login_signup/Login";
import Home from "./Pages/home/index";
import Profile from "./Pages/profile/profile";
import Creat_exam from "./Pages/creat_exam/creat_exam";
import Take_exam from "./Pages/take_exam/take_exam";
import {logout,isLoggedIn}from "../../frontend/src/services/authService"



export default function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route index  path="/" element={<Home />} />   
          <Route path="/auth" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create_exam" element={isLoggedIn()?<Creat_exam/>:<Navigate to="/auth"/>}/>
          <Route path="/take_exam" element={isLoggedIn()?<Take_exam />:<Navigate to="/auth"/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
  

