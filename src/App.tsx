import Home from "./containers/Home/Home.tsx";
import Work from "./containers/Work/Work.tsx";
import About from "./containers/About/About.tsx";
import Navigator from "./containers/Navigator/Navigator.tsx";
import Portfolio from "./containers/Portfolio/Portfolio.tsx";
import Contact from "./containers/Contact/Contact.tsx";

function App() {
  return (
    <>
      <Home />
      <Work />
      <About />
      <Portfolio />
      <Contact />
      <Navigator />
    </>
  )
}

export default App
