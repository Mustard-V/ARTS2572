import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./css/LogIn.css";

const LogIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Form
            className="login-form"
            onSubmit={(e) => {
                e.preventDefault();
                console.log(email);
                console.log(password);
            }}
        >
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>

            <Button type="submit" className="login-button">
                Submit
            </Button>
        </Form>
    );
};

export default LogIn;
