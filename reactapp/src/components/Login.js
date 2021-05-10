// import { useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import App from '../App'

export function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // validate inputs data.get("email"),data.get("password");
    const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
    fetch('/api/user/login', { method: 'POST', body: jsonData })
      .then((res) => res.json())
      .then((err) => console.error(err));
  };

  return (
    <div className="container col-sm-6 mt-4">
      <h1>Login</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="chkRememberMe"
            label="Remember me"
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary col-sm-4" type="submit center">
            Login
          </Button>
          <a href="/signup" className="btn btn-outline-info col-sm-4 ml-3">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
