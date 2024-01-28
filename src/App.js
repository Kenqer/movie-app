import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landingpage from './Landingpage';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Movies from './Movies';
import Tvseries from './Tvseries';
import Article from './Article';
import Player from './Player';
import Pagination from './Pagination';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content bg-slate-900">
        <Switch>
          <Route exact path="/">
            <Landingpage />
            </Route>
          <Route path="/home">
            <Home />
            </Route>
          <Route path="/movie">
            <Movies />
            <Pagination />
            </Route>
          <Route path="/tv">
            <Tvseries />
            <Pagination />
            </Route>
          <Route path="/article">
            <Article />
            </Route>
          <Route path="/video">
            <Player />
            </Route>
          </Switch>
      </div>
      <Footer />
    </div>

    </Router>
  );
}

export default App;
