import './App.css';
import Login from './components/login'
import Profile from './components/profile'
import Resutls from './components/results'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/results" component={Resutls} />
    </div>
    </Router>
  );
}

export default App;
