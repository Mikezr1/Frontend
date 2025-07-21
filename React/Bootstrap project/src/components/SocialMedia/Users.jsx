import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserList from './UserList.jsx';
import { useEffect, useState } from 'react';

function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=9')
      .then((res) => res.json())
      .then((data) => {
        // Optioneel: je kunt de data formatteren naar jouw structuur
        const formattedUsers = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          birthdate: user.dob.date,
          email: user.email,
          friends: Math.floor(Math.random() * 100), // willekeurig aantal vrienden
          premium: user.gender === 'female', // bijvoorbeeld: vrouwen zijn premium
          image: user.picture.large,
        }));
        setUserData(formattedUsers);
      });
  }, []);

   return (
    <Container>
      <Row className="g-4">
        <UserList users={userData} />
      </Row>
    </Container>
  );
}


// function Users() {
//   const userData = [
//     {
//       name: "hans",
//       birthdate: Date.now(),
//       email: "hans@email,nl",
//       friends: 10,
//       premium: false,
//       image: "/src/assets/images/Hans.avif",
//     },
//     {
//       name: "mike",
//       birthdate: Date.now(),
//       email: "mike@email,nl",
//       friends: 10,
//       premium: false,
//       image: "/src/assets/images/Hans.avif",
//     },
//     {
//       name: "bro",
//       birthdate: Date.now(),
//       email: "bro@email,nl",
//       friends: 10,
//       premium: true,
//       image: "/src/assets/images/Hans.avif",
//     }
//   ];

//   return (
//     <Container>
//       <Row>
//         <UserList users={userData} />
//       </Row>
//     </Container>
//   );
// }

export default Users;