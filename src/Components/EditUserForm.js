import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editUser } from '../actions/usersActions';

class EditUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            email: props.userInfo.email,
            gen: props.userInfo.gen,
            id: props.userInfo.id
        }
    }
    handlechange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updatedUser(this.state);
        this.setState({
            name: "",
            email: "",
            gen: "",

        });
        this.props.closeModal(true) 
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name"
                        onChange={this.handlechange} value={this.state.name} />

                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"
                        onChange={this.handlechange} value={this.state.email} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control type="number" placeholder="Gen" name="gen"
                        onChange={this.handlechange} value={this.state.gen} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        );
    }
}
const mapDispatchToProps = {
    updatedUser: editUser
}
export default connect(null, mapDispatchToProps)(EditUserForm);
