import { Links, Nav } from "../styles/SyleGlobal";

const Navbar = ({ children }) => {
  return (
    <Nav>
      
      <Links to="/home" smooth={true} duration={500}>Home</Links>
      <Links to="#section1">About</Links>
      <Links to="/Proyect">Proyect</Links>
      <Links to="/Skills">Skills</Links>
      <Links to="/Contact">Contact</Links>
      <div>{children}</div>
    </Nav>
  );
};

export default Navbar;
