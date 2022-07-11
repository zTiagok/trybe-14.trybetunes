import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEditor from './pages/ProfileEditor';
import NotFound from './pages/NotFound';

// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="master">
        <BrowserRouter>
          <main id="content">
            <Switch>
              {/* LOGIN */}
              <Route exact path="/" component={ Login } />

              {/* OTHERS PAGES */}
              <Route path="/search" component={ Search } />
              <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
              <Route path="/favorites" component={ Favorites } />
              <Route path="/profile/edit" component={ ProfileEditor } />
              <Route path="/profile" component={ Profile } />

              {/* NOT FOUND */}
              <Route path="*" component={ NotFound } />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
