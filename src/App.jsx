import React from 'react';

import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  const AboutRef = React.useRef(null);

  const handleClick = () => {
    AboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Home handleClick={handleClick} />
      <div className="border"></div>
      <About ref={AboutRef} />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};
