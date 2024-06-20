import Appbar from './components/Nav/Appbar';
import Banner from './components/Banners/Banner';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Team from './components/Teams/Team';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Appbar/>
    <Banner/>
    <About/>
    <Services/>
    <Team/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    
    </div>
  );
}

export default App;
