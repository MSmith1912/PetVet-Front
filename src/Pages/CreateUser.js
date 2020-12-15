import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const CreateUser = ({ onCreateUserPressed }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DOB, setDOB] = useState("");
    const [access, setAccess] = useState("");

    const body = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        DOB: DOB,
        access: access
    }

    return (
        <div className="components">
            <Form>
                <Form.Group controlId="username">
                    <Form.Text className="username-text"></Form.Text>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Text className="password-text"></Form.Text>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control
                        type="text"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="firstName">
                    <Form.Text className="firstName-text"></Form.Text>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Text className="lastName-text"></Form.Text>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="DOB">
                    <Form.Text className="DOB-text"></Form.Text>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control
                        type="text"
                        name="DOB"
                        value={DOB}
                        onChange={(event) => setDOB(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="access">
                    <Form.Text className="accesstext"></Form.Text>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control
                        type="text"
                        name="access"
                        value={access}
                        onChange={(event) => setAccess(event.target.value)}
                    />
                </Form.Group>

                <Button onClick={() => {
                    onCreateUserPressed(body);
                }}>Submit</Button>
            </Form>
        </div>
    )
}