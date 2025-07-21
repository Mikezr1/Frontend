import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react'


function renderUser(userData) {
  return (
      <ListGroup>
        <ListGroup.Item>{userData.name}</ListGroup.Item>
        <ListGroup.Item>{userData.birthdate}</ListGroup.Item>
        <ListGroup.Item>{userData.email}</ListGroup.Item>
        <ListGroup.Item>
          <Form>
            <Form.Check 
                checked= {userData.premium}
                label='premium'
            >
            </Form.Check> 
          </Form>
        </ListGroup.Item> 
      </ListGroup>
  )
}

function DataSocialMedia() {
const userData = [{
  name: "hans",
  birthdate: Date.now(),
  email: "hans@email,nl",
  friends: 10,
  premium: false,
  },
  {
  name: "mike",
  birthdate: Date.now(),
  email: "mike@email,nl",
  friends: 10,
  premium: false,
  },
  {
  name: "bro",
  birthdate: Date.now(),
  email: "bro@email,nl",
  friends: 10,
  premium: true,
  }]


//iteratie op een lijst en past dit toe en geeft het resultaat. 
// de map maakt een nieuwe lijst op basis van elke element in de array en stopt dat im een nieuwe resultaat.
  let output = userData.map(
    (user) => {
    return (
      <Col>
          {renderUser(user)}
      </Col>
    )
  }
)
  return (
    <Container>
          <Row>
            {output}
          </Row>
    </Container>
  )
}

export default DataSocialMedia