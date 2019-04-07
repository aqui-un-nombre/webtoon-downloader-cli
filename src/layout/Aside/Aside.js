import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Aside extends Component {
  render() {
    return (
      <aside className="back-dark-semi h-100 pt-5 px-2">
        <ul className="fa-ul pt-3">
          <li>
            <a href="/"><span className="fa-li"><FontAwesomeIcon icon="igloo" size="lg" /></span><span className="ml-2">Inicio</span></a>
          </li>
          <li className="mt-3">
            <a href="/"><span className="fa-li"><FontAwesomeIcon icon="binoculars" size="lg" /></span><span className="ml-2">Explorar</span></a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Aside;
