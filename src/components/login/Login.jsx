import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login">
      <Tab.Container defaultActiveKey="login">
        <Nav justify variant="pills">
          <Nav.Item>
            <Nav.Link eventKey="login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="register">Register</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="login">
            <p className="mt-4">Sign in with:</p>
            <section className="login-icons">
              <Link to="https://www.facebook.com" target="_blank">
                <FaFacebookF />
              </Link>
              <Link to="https://www.twitter.com/" target="_blank">
                <FaTwitter />
              </Link>
              <Link to="https://google.com/" target="_blank">
                <FaGoogle />
              </Link>
              <Link to="https://github.com/" target="_blank">
                <FaGithub />
              </Link>
            </section>
            <p>or:</p>
            <Form method="post">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 login-checkbox"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Remember me" />
                <Form.Text className="text-muted">
                  <Link to="/">Forgot password?</Link>
                </Form.Text>
              </Form.Group>
              <div className="d-grid gap-2 mb-3">
                <Button variant="primary" type="submit" size="lg">
                  Sign In
                </Button>
              </div>
            </Form>
            <p>
              Not a member?
              <span>
                <Link to="#"> Register</Link>
              </span>
            </p>
          </Tab.Pane>
          <Tab.Pane eventKey="register">
            <p className="mt-4">Sign up with:</p>
            <section className="login-icons">
              <Link to="https://www.facebook.com" target="_blank">
                <FaFacebookF />
              </Link>
              <Link to="https://www.twitter.com/" target="_blank">
                <FaTwitter />
              </Link>
              <Link to="https://google.com/" target="_blank">
                <FaGoogle />
              </Link>
              <Link to="https://github.com/" target="_blank">
                <FaGithub />
              </Link>
            </section>
            <p>or:</p>
            <Form method="post">
              <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Control
                  type="text"
                  name="login"
                  placeholder="Login"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCreatePassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  required
                />
              </Form.Group>
              <div className="d-grid gap-2 mb-3">
                <Button variant="primary" type="submit" size="lg">
                  Sign Up
                </Button>
              </div>
            </Form>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Login;
