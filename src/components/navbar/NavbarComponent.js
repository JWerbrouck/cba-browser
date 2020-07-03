import React, { Component } from 'react'
import {Navbar, Nav} from "react-bootstrap"

export default class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">CBA</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Play</Nav.Link>
              <Nav.Link href="/info">Info</Nav.Link>
              <Nav.Link href="/future">Future</Nav.Link>
            </Nav>
          </Navbar>
        )
    }
}
