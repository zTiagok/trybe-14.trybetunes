import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import ProfileEditor from '../pages/ProfileEditor';
import Search from '../pages/Search';

class Content extends React.Component {
  render() {
    return (
      <main id="content">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEditor } />
          <Route path="/profile" component={ Profile } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
