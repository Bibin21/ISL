import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyles from './assets/GlobalStyles.js';

import "locomotive-scroll/dist/locomotive-scroll.css";
import loader from './assets/loader.gif'
import {Button} from "@nextui-org/react";
import Home from './components/Home' ;
import Upcomming from './components/Upcomming';
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import Marquee from './components/Marquee.jsx';
import { useRef, useState, useEffect } from "react";
import Team from './components/Team.jsx';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import Club from './components/Club.jsx';
import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy.js";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';

function App() {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {setTimeout(() => {setLoaded(true); }, 3000);  }, []);

  return (
    <>
       <GlobalStyles />
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
             
            ]
          }
          containerRef={containerRef}
        >
           <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}
        <div className='relative'> <Navbar/></div>
        <BrowserRouter>
        <Routes>

         <Route path="/" element={<Home/>}> </Route>
         <Route path="/team" element={<Team/>}> </Route>
         <Route path="/club" element={ <Club/> }> </Route>
        </Routes>
        <div className='relative'> <Footer/></div>
       </BrowserRouter>
       </AnimatePresence>
        </main>
        
        </LocomotiveScrollProvider>
        </>
  )
}

export default App
