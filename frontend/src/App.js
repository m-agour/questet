import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./project/Login";
import Home from "./project/home/index";
import Profile from "./project/profile/profile";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />  
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </>
  );
}
  

