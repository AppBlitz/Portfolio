import { useEffect } from "react";
import { Skill } from "./components/index.js";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { Email } from "./components/index.js";
import { About } from "./pages/About.jsx";

const App = () => {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  const handleSetActive = (to) => {
    console.log(to);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Link to="skill" onSetActive={handleSetActive}></Link>
      <Link to="email" onSetActive={handleSetActive}>
        {" "}
        About
      </Link>
      <Element name="test1" className="element">
        <Skill />
      </Element>
      <Element name="email">
        <Email />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <br />
      <a onClick={scrollToTop} className="cursor-pointer">
        To the top!
      </a>
    </div>
  );
};
export default App;
