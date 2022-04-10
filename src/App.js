import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import Footer from './components/Footer';
import WelcomePage from './components/welcomePage';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Header />
    <main style ={{minHeight: "93vh"}}>
      <WelcomePage />
      <About />
      <Skills />
      <Contact />
    </main>
    <Footer />
    </>
  );
}

export default App;
