import { useEffect, useState } from "react";
import { Card, Container, Header, Button } from './styles';

export default function Home(){
  const [users, setUsers] = useState([]);
  const [usersPerPage,] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(users.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex); 

  useEffect(() => {
    async function loaderUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.log('error', error);
      }
    }
    loaderUsers();
  }, []);

  function handleChangeIndex (event) {
    setCurrentPage(Number(event.target.value));
  }

  return (
    <Container>
      <Header>
        <strong>
          {users.length}
          {users.length === 1 ? ' usuário' : ' usuários'}
        </strong>

        <div>
          {Array.from(Array(pages), (user, index) => {
            return <Button value={index} onClick={handleChangeIndex}>{index + 1}</Button>
          })}
        </div>
      </Header>

      <div>
          {currentUsers.map((user) => (
            <Card key={user.id}>
              <div className="info">
                <strong>{user.name}</strong>
                <small>{user.email}</small>
                <small>{user.address.city}</small>
              </div>
            </Card>
          ))}
        </div>
      </Container>
  );
}