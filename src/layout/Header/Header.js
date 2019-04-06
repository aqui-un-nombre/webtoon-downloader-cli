import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox'

class Header extends Component {
  render() {
    return (
      <header className="d-block w-100 pt-3 px-3">
        <SearchBox />
      </header>
    );
  }
}

export default Header;
