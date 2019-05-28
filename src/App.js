import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Features from './components/featured/index';
import VenueNFO from './components/venueNFO/index';
import Highlights from './components/Highlights/index';
import Pricing from './components/pricing/index';
import Location from './components/location/index';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Element name="featured">
        <Features />
      </Element>
      <Element name="venuenfo">
        <VenueNFO />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
