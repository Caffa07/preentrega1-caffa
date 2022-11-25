import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container-Navbar">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#" eventKey="link-1">
            ¿Como Comprar?
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#" eventKey="link-2">
            Conocenos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#" eventKey="disabled" disabled>
            <CartWidget />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
