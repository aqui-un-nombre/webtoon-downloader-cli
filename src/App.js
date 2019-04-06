import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import './stylesheet/App.scss';

class App extends Component {
  render() {
    return (
      <div className="h-100 w-100">
        <header className="">
          <Alert variant="danger">
            <Alert.Heading>How's it going?!</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum.
            </p>
          </Alert>
        </header>
      </div>
    );
  }
}

export default App;
