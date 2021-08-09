import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './components/Header';
import Crousel from './components/Crousel';
import Services from './components/Services';
import Partner from './components/Partner';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Intro from './components/Intro';
import Team from './components/Team';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <div className="mainContent">
      <Header />
        <Chat />
        <Intro />
        {/* <Crousel /> */}
        <Services />
        {/* <Partner /> */}
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default App;
