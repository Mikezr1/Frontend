import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function renderUser(userData) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <img src={userData.image} alt={userData.name} width="80%" class="rounded" />
      </ListGroup.Item>
      <ListGroup.Item>{userData.name}</ListGroup.Item>
      <ListGroup.Item>
        {new Date(userData.birthdate).toLocaleDateString('nl-NL', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </ListGroup.Item>
      <ListGroup.Item>{userData.birthdate}</ListGroup.Item>
      <ListGroup.Item>{userData.email}</ListGroup.Item>
      <ListGroup.Item>
        <Form>
          <Form.Check 
            checked={userData.premium}
            label="Premium"
            readOnly
          />
        </Form>
      </ListGroup.Item>
    </ListGroup>
  );
}

function UserList({ users }) {
  return (
    <>
    <h2 className="my-4">User list</h2>
      {users.map((user, index) => (
        <Col key={index}>
          {renderUser(user)}
        </Col>
      ))}
    </>
  );
}

export default UserList;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import ListGroup from 'react-bootstrap/ListGroup';
// // import Accordion from 'Accordion'
// // import NavBarTabs from './Navbar/NavBarTabs.jsx'
// import './App.css'

//  //elke functie in JSC kan iets returnen
// function renderUser(userData) {
//   return (
//       <ListGroup>
//         <ListGroup.Item>{userData.name}</ListGroup.Item>
//         <ListGroup.Item>{userData.birthdate}</ListGroup.Item>
//         <ListGroup.Item>{userData.email}</ListGroup.Item>
//         <ListGroup.Item>
//           <Form>
//             <Form.Check 
//                 checked= {userData.premium}
//                 label='premium'
//             >
//             </Form.Check> 
//           </Form>
//         </ListGroup.Item> 
//       </ListGroup>
//   )
// }


// function Users() {
// const userData = [{
//   name: "hans",
//   birthdate: Date.now(),
//   email: "hans@email,nl",
//   friends: 10,
//   premium: false,
//   },
//   {
//   name: "mike",
//   birthdate: Date.now(),
//   email: "mike@email,nl",
//   friends: 10,
//   premium: false,
//   },
//   {
//   name: "bro",
//   birthdate: Date.now(),
//   email: "bro@email,nl",
//   friends: 10,
//   premium: true,
//   }]
// //iteratie op een lijst en past dit toe en geeft het resultaat. 
// // de map maakt een nieuwe lijst op basis van elke element in de array en stopt dat im een nieuwe resultaat.
//   let output = userData.map(
//     (user) => {
//     return (
//       <Col>
//           {renderUser(user)}
//       </Col>
//     )
//   }
// )

//   return (
//     <Container>
//           <Row>
//             {output}
//           </Row>
//     </Container>
//   )
// }

// export default DataSocialMedia

//  <>
//    {/* lege div mag maar een parent zijn*/}
//    </>


