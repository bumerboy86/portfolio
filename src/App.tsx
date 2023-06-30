import Home from "./containers/Home/Home.tsx";
import Work from "./containers/Work/Work.tsx";
import About from "./containers/About/About.tsx";
import Navigator from "./containers/Navigator/Navigator.tsx";

function App() {
  return (
    <>
        <Navigator />
        <Home />
        <Work />
        <About />
    </>
  )
}

export default App
