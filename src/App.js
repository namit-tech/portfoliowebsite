import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Services/Service';
import Skills from './components/Skills/Skills';
function App() {
  return (
   <>
   <Header/>
   <main>
    <Home/>
    <About/>
    <Skills/>
    <Service/>
    <Portfolio/>
    <Contact/>
   </main>
   <Footer/>
   </>
  );
}

export default App;
