import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class SearchBox extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail" className="m-0">
          <Form.Label className="sr-only">Escribe algo...</Form.Label>
          <Form.Control type="text" placeholder="Escribe algo..." />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBox;
