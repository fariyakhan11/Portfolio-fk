import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Scroll from "./components/Scroll/Scroll"
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import { useContext } from "react";
import { themeContext } from "./Context";
// import SkillSlider from "./components/Skills/SkillCarousel";
import SkillCarousel from "./components/Skills/SkillCarousel";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
        flex:1,
      }}
    >
      <Navbar />
      <Scroll/>
      <Intro />
      <SkillCarousel/>
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
