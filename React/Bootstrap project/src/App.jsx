import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css'

 //elke functie in JSC kan iets returnen
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



function App() {
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

export default App

//  <>
//    {/* lege div mag maar een parent zijn*/}
//    </>