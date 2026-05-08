import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Method from './components/Method/Method';
import Metrics from './components/Metrics/Metrics';
import Cta from './components/Cta/Cta';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Method />
        <Metrics />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
