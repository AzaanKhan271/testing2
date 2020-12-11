import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherFetch from "./WeatherFetch.js"
function App() {
  return (
    <div className="App">
      <WeatherFetch />
    </div>
  );
}

function cityName() {
  <div>
    <input
      type="text"
      value="Enter city name"
    />
    <button>Submit</button>
  </div>
}
export default App;

