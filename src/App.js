import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from "./pages/Main"
import About from "./pages/About"
import Services from "./pages/Services"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Contacts from "./pages/Contacts"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/Login" component={LogIn} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
