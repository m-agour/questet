import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./Pages/Login_signup/Login";
import Home from "./Pages/home/index";
import Profile from "./Pages/profile/profile";
import Creat_exam from "./Pages/creat_exam/creat_exam";
import Take_exam from "./Pages/take_exam/take_exam";



export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />   
          <Route path="/auth" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/create_exam" component={Creat_exam} />
          <Route path="/take_exam" component={Take_exam} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </>
  );
}
  

