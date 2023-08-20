import { Header } from "../styles/SyleGlobal"
// import foto from "../assets/hanz-n.webp"
import fot2 from "../assets/sinfondo.png"
import Navbar from "../components/Navbar"
import ParentComponent from "../components/ParentComponent"
const Home = () => {
  return (
    <Header>
    <Navbar>
    <ParentComponent/>
    </Navbar>
    <section>
      <img src={fot2} alt="foto portada " />
    </section>
  
    </Header>
    )
}

export default Home
