import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.success) {
        // Redirect to the members page on successful login
        navigate('/members');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error(error);
    }
  };

  return (
    <Container className="login-container d-flex justify-content-center align-items-center">
      <div>
        <h1>welcome.</h1>
        {message && <p>{message}</p>}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label></Form.Label>
            <Form.Control className="form-text" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control className="form-text" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button className="form-btn" size="lg" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;






