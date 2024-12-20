
import './styles.css'
import Hero from '../../Componentes/HeroPrincipal';
import Header from '../../Componentes/Header';
import About from '../../Componentes/About';
import Projects from '../../Componentes/Projects';
import Skills from '../../Componentes/Skills';
import Resume from '../../Componentes/Resume';

import Footer from '../../Componentes/Footer';
import ContactForm from '../../Componentes/Contacts';
import Contacts from '../../Componentes/Contacts';
function Home() {
  return (
    <div className="Home">
        <Hero/>
        <Header/>
        <About/>

        <Projects/>
        <Skills/>

        <Resume/>
        <Contacts/>

        <Footer/>
    </div>
  );
}

export default Home;
