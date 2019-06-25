import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

export default function MainNavigation() {
  return(
    <Navbar bg="dark" variant="dark" expang="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand>DLM</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="main-navigation-navbar-nav" />
      <Navbar.Collapse id="main-navigation-navbar-nav">
        <Nav className="nr-auto">
          <LinkContainer to="/daily-matters">
            <Nav.Link>Daily matters</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/events">
            <Nav.Link>Events</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/cookbook">
            <Nav.Link>Cookbook</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/to-do-lists">
            <Nav.Link>To do lists</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/calendar">
            <Nav.Link>Calendar</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/finance">
            <Nav.Link>Finance</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
