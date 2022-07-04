import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
