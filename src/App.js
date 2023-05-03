import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Route from "./components/Route";
import Link from "./Link";

function App(props) {
  return (
    <>
      <AppBar></AppBar>
      <Route path="/">
        <Profile />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
