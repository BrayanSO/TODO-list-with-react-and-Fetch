import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function Box() {
  return (
    <div className='container'>
      <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-center'>{<h1>todos</h1>}</Form.Label>
        <Form.Control placeholder="Que necesitas hacer?" />
      <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    </ListGroup>
    </Form.Group>
    </div>
  );
}

export default Box;
