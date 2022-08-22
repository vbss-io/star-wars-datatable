import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import '../style/Header.css';
import img from '../projectIntro.gif';

function Header() {
  return (
    <header>
      <Container fluid>
        <Row>
          <Image
            src={ img }
            alt="Star Wars Logo"
            className="logo"
            fluid
          />
        </Row>
        <Row className="w-50 mx-auto">
          <Button
            href="#StarWarsDataTable"
            variant="outline-warning"
            size="sm"
            className="w-100 mx-auto"
          >
            May the force be with you.
          </Button>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
