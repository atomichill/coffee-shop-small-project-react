
import './App.css';

import Header from '../header/header';
import SectionTitle from '../section-title/section-title';
import About from '../about-us/about-us';
import Best from '../our-best/our-best';
import Footer from '../footer/footer';

function App() {
  return (
    <div>
      <Header/>
      <SectionTitle/>
      <About/>
      <Best/>
      <Footer/>
    </div>
  );
}

export default App;
