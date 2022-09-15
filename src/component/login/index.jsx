import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import {login} from '../../adapter/api/loginAPi';
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  useEffect(()=> {
    if(localStorage.getItem('token')){
      return navigate('/user')
    }
  },[navigate])
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = async(e) => {
    e.preventDefault()

    const submit = {
        'email' : email,
        'password' : password
    }
    const { data }=  await login(submit);
    console.log(data)
    if(data.token){
      toast.success('success')
      localStorage.setItem('token', data.token)
      setTimeout(() => {
       
        navigate('user')
      },1000)

    } 

  }
  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
