import React from 'react';
import Header from '../components/Header';

class ProfileEditor extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile-edit" id="content-editor">
          Editor Page
        </div>
      </>
    );
  }
}

export default ProfileEditor;
