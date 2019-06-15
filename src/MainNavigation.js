import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export default function MainNavigation() {
  return(
    <Navbar bg="dark" variant="dark" expang="lg" fixed="top">
      <Navbar.Brand href="/">DLM</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navigation-navbar-nav" />
      <Navbar.Collapse id="main-navigation-navbar-nav">
        <Nav className="nr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/daily-matters">Daily matters</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/cookbook">Cookbook</Nav.Link>
          <Nav.Link href="/shopping-lists">Shopping lists</Nav.Link>
          <Nav.Link href="/calendar">Calendar</Nav.Link>
          <Nav.Link href="/finance">Finance</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
