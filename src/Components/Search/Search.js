import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
const Search = ({ handlerSearch }) => {
  const [characters, setCharacters] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    handlerSearch(characters);
  };
  const handlerInput = (e) => {
    setCharacters(e.target.value);
  };
  return (
    <Form onSubmit={handlerSubmit}>

      <Row className="justify-content-center">

        <Col md={10}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Buscar por nombre personaje"
              onChange={handlerInput}
            />
          </Form.Group>
        </Col>
        <Col md={2}>

          <Button type="submit">Buscar</Button>
        </Col>
      </Row>
    </Form>


  );
};

export default Search;
