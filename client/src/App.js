import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ByTime } from './pages/ByTime';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/bytime">
            <ByTime />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
