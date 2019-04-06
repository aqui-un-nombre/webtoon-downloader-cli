import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Aside extends Component {
  render() {
    return (
      <aside className="back-dark-semi h-100 pt-5 px-3">
        <ul className="fa-ul">
          <li><span className="fa-li"><FontAwesomeIcon icon="igloo" className="mr-3" /></span>Inicio</li>
          <li className="mt-3"><span className="fa-li"><FontAwesomeIcon icon="binoculars" className="mr-3" /></span>Explorar</li>
        </ul>
      </aside>
    );
  }
}

export default Aside;
