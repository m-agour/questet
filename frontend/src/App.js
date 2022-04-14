import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./project/Login";
import Home from "./project/home/index";
import Profile from "./project/profile/profile";
import Creat_exam from "./project/creat exam/creat_exam";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />  
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/creat_exam" component={Creat_exam} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </>
  );
}
  

