import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './Components/Users';
import AddUserForm from './Components/AddUserForm';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: "Ahmed Zaky",
          email: "ahmed@gmail.com",
          gen: "12",
          id: "ggnikt668"
        },
        {
          name: "Princess Kena",
          email: "princess@gmail.com",
          gen: "15",
          id: "bdhfj4i75"
        },
        {
          name: "Adwoa Comfort",
          email: "comfy@gmail.com",
          gen: "12",
          id: "rgfmhfu68,"
        },
        {
          name: "Adwoa Comfort",
          email: "comfy@gmail.com",
          gen: "12",
          id: "ghyegn364587"
        },
      ]
    }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4"><AddUserForm addUser={this.addNewUser} /></Col>
            <Col><Users usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

