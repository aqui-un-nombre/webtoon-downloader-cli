import React, { Component } from 'react';
import Aside from './layout/Aside/Aside';
import MainContainer from './layout/MainContainer/MainContainer';
import Header from './layout/Header/Header';
import './stylesheet/App.scss';

class App extends Component {
  render() {
    return (
      <div className="h-100 w-100">
        <div className="row h-100 no-gutters">
          <div className="col-2"><Aside /></div>
          <div className="col">
            <Header />
            <MainContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
