import Home from "./containers/Home/Home.tsx";
import Work from "./containers/Work/Work.tsx";
import About from "./containers/About/About.tsx";
import Navigator from "./containers/Navigator/Navigator.tsx";
import {RefObject, useRef} from "react";

function App() {
    const home: RefObject<HTMLDivElement> = useRef(null);
    const work: RefObject<HTMLDivElement> = useRef(null);
    const about: RefObject<HTMLDivElement> = useRef(null);

    const handleScrollToHome = ():void => {
        home.current && home.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollToWork = ():void => {
        work.current && work.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollToAbout = ():void => {
        about.current && about.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
        <Home fn={handleScrollToWork} element={home}/>
        <Work element={work}/>
        <About element={about} />
        <Navigator goHome={handleScrollToHome}
                   goWork={handleScrollToWork}
                   goAbout={handleScrollToAbout}
        />
    </>
  )
}

export default App
