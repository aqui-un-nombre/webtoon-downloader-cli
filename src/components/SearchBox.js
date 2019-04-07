import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBox extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail" className="m-0 position-relative search-box">
          <Form.Label className="sr-only">Escribe algo...</Form.Label>
          <Form.Control type="text" className="rounded-pill border-0 pl-5 gray font-bold" placeholder="Escribe algo..." />
          <FontAwesomeIcon icon="search" className="position-absolute gray icon-search" size="lg" />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBox;
