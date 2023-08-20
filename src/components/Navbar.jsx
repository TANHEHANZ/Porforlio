import { Links, Nav } from "../styles/SyleGlobal";

const Navbar = ({ children }) => {
  return (
    <Nav>
      <Links to="/home">Home</Links>
      <Links to="/About">About</Links>
      <Links to="/Proyect">Proyect</Links>
      <Links to="/Contact">Contact</Links>
      <div>{children}</div>
    </Nav>
  );
};

export default Navbar;
