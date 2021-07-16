import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import ArtistPage from './pages/ArtistPage/ArtistPage';
import SamplePage from './pages/SamplePage/SamplePage';
import AlbumPage from './pages/AlbumPage/AlbumPage';

function App() {
  return (
    <Router>
      <Switch>       
        <Route path="/artist">
          <ArtistPage />
        </Route>
        <Route path="/album/:id">
          <AlbumPage />
        </Route>
        <Route path="/">
          <SamplePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
