import './styles.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Gallery from './components/Gallery';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Programs />
      <WhyUs />
      <Team />
      <Gallery />
      <CtaBand />
      <Footer />
    </>
  );
}
