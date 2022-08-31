import React from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import AyizaLogo from '../../../assets/images/Ayiza-Logo.png'

const Login = () => {
  return (
    <Container className="form-signin w-100">
      <Form className="text-center">
        <img className="mb-4" src={AyizaLogo} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 text-dark">Please sign in</h1>
        <div className="floating-input-group">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="custom-floating-input"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="border-bottom"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="custom-floating-input"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </div>

        <Form.Check
          className="checkbox mb-3"
          type="checkbox"
          label="Remember me"
        />
        <Button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </Button>
        <p className="mt-5 mb-3 text-muted">
          &copy; 2017–{new Date().getFullYear()}
        </p>
      </Form>
    </Container>
  )
}

export default Login
