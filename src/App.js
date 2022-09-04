import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container  from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import background from './assets/homepage-hero-background.webp';
import logo from './assets/instacartlogo.svg';


function App() {
  return (
    <>
    <Navbar bg="light" expand="lg" fixed= "top">
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src={logo} alt="logo" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>
<Image src={background} alt="background image"/>
  <Container>

  </Container>
</>
  );
}

export default App;
