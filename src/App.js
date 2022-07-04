import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
