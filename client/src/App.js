// import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Profile from './components/profile'
import Results from './components/results'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterPage from './components/footer'
import ourError from "./components/Error/sorry"
function App() {

  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/results" component={Results} />
        <Route component={ourError} />
    
    <FooterPage></FooterPage>
    </Switch>
    </Router>
  );
}

export default App;
