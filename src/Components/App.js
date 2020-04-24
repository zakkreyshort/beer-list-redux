import React from 'react';
import './App.css';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import BeerControl from './BeerControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <BeerControl />
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;
