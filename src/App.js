import logo from './images/LOGO1.png';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Blog from './Component/Blog';
import Service from './Component/Service';
import Contact from './Component/Contact';
import { Route, BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
 <Router className="bg-primary" >

 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className=" fixed-top " >
  <Container>
  <Navbar.Brand href="#home"  >
  <Image src={logo} className="" style={{height: "50px", width: "100px"}}   fluid/>
     </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end ">
    <Nav className="text-light">
    <Nav.Link className=" "> 
      <Link  to='' className="text-decoration-none text-light"><i class="fas fa-home p-2"></i>Home</Link> 
      </Nav.Link>
      <Nav.Link>
      <Link  to='/About'  className="text-decoration-none text-light"><i class="fas fa-address-card p-2"></i> About</Link>
      </Nav.Link>
      <Nav.Link>
      <Link  to ='/Blog'className="text-decoration-none text-light" ><i class="fas fa-file-alt p-2"></i> Blog</Link>
      </Nav.Link>
      <Nav.Link>
      <Link  to ='/Service'  className="text-decoration-none text-light"><i class="fas fa-tasks p-2"></i> Service</Link>
      </Nav.Link>
      <Nav.Link>
      <Link  to ='/Contact' className="text-decoration-none text-light"><i class="fas fa-mobile p-2"></i> Contact</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



      <Route   exact path={'/'} component={Home}></Route>
      <Route path={'/About'} component={About}></Route>
      <Route path={'/Blog'} component={Blog}></Route>
      <Route path={'/Service'} component={Service}></Route>
      <Route path={'/Contact'} component={Contact}></Route>


    </Router>
    </div>
  );
}

export default App;
