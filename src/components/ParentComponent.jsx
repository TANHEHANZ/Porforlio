import { Section } from "../styles/SyleGlobal";
import Typewriter from "typewriter-effect";
const ParentComponent = () => {
  return (
    <>
      <Section>
        <h1>
          <div>Front</div> - end <div>developer</div>
        </h1>
        <h2>Hanz Limber Tapia Choque</h2>
        <div>
          <strong>Hello and welcome!</strong>
          <Typewriter
            options={{
              strings: [
                "I'm a passionate creator with a flair for design.",
                "My aim is to blend beauty with flawless functionality,",
                "transforming ideas into interactive interfaces that bring smiles to users.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <button>Contact Me</button>
      </Section>
    </>
  );
};

export default ParentComponent;
