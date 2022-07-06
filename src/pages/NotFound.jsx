import React from 'react';
import Header from '../components/Header';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-not-found" id="content-not-found">
          404 Page Not Found
        </div>
      </>
    );
  }
}

export default NotFound;
