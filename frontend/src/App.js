import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./project/Login";
import Home from "./project/home/index";
import Profile from "./project/profile/profile";
import Create_exam from "./project/creat exam/create_exam";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/create_exam" component={Create_exam} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
