// import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Profile from './components/profile'
import Resutls from './components/results'
import { BrowserRouter as Router, Route } from "react-router-dom";
import FooterPage from './components/footer'

function App() {
  return (
    <Router>
   
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/results" component={Resutls} />
    
    <FooterPage></FooterPage>
    </Router>
  );
}

export default App;
