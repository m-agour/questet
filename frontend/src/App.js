import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Pages/Login_signup/Login";
import Home from "./Pages/home/index";
import Profile from "./Pages/profile/profile";
import Creat_exam from "./Pages/creat_exam/creat_exam";
import Take_exam from "./Pages/take_exam/take_exam";



export default function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route index  path="/" element={<Home />} />   
          <Route path="/auth" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create_exam" element={<Creat_exam />} />
          <Route path="/take_exam" element={<Take_exam />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
  

