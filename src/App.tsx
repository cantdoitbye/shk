import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <Navigation data={{ name: "Hari Kripa Foundation" }} />
      <Header data={data.Header} />
      <About data={data.About} />
    </div>
  );
}

export default App; 