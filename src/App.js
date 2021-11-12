import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch  } from 'react-router-dom';
import { Redirect  } from 'react-router-dom';
import { Route} from 'react-router-dom';
import Main from "./pages/Main"
import About from "./pages/About"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route exact path="/Main"  component={Main} />
          <Route exact path="/"><Redirect to='/Main'/></Route>
          <Route exact path="/About"  component={About} />
          <Route exact path="/Services"  component={Services} />
          <Route exact path="/Contacts"  component={Contacts} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
