import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile" id="content-profile">
          Profile Page
        </div>
      </>
    );
  }
}

export default Profile;
