
import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function C5() {
  
  const [allPlayers, setAllPlayers] = useState([
    { name: "", description: "", price: null, rating: null },
  ]);

  const handleAddPlayers = () => {
    const values = [...allPlayers];
    values.push({
      name: "",
      description: "",
      price: null,
      rating: null,
    });
    setAllPlayers(values);
  };

  const handleRemovePlayers = (index) => {
    const values = [...allPlayers];
    values.splice(index, 1);
    setAllPlayers(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...allPlayers];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAllPlayers(values);
  };

  console.log(allPlayers);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="6" className="dynamic-form-headings">
          <h3>Dynamic Form Fields</h3>
          <Button variant="primary" onClick={() => handleAddPlayers()}>
            Add Player
          </Button>
        </Col>
        <Col xs="12">
          <Form>
            <Row className="justify-content-center">
              {allPlayers.length > 0 && (
                <>
                  {allPlayers.map((field, index) => (
                    <Col xs="4">
                      <div className="add-player-div">
                        <h4>Player {index + 1}</h4>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={field.name}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="description"
                            placeholder="Enter Description"
                            value={field.description}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="number"
                            name="price"
                            placeholder="Enter Price"
                            value={field.price}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="number"
                            name="rating"
                            placeholder="Enter Rating"
                            value={field.rating}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Button
                          variant="secondary"
                          onClick={() => handleRemovePlayers(index)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default C5;