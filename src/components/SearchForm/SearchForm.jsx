import React from 'react';
import './SearchForm.css';

const SearchForm = props => (
  <div id="search-container">
    <div id="month-container">
      <h3>Choose a Month</h3>
      <button value="1" onClick={props.handleUpdateMonth}>January</button>
      <button value="2" onClick={props.handleUpdateMonth}>February</button>
      <button value="3" onClick={props.handleUpdateMonth}>March</button>
      <button value="4" onClick={props.handleUpdateMonth}>April</button>
      <button value="5" onClick={props.handleUpdateMonth}>May</button>
      <button value="6" onClick={props.handleUpdateMonth}>June</button>
      <button value="7" onClick={props.handleUpdateMonth}>July</button>
      <button value="8" onClick={props.handleUpdateMonth}>August</button>
      <button value="9" onClick={props.handleUpdateMonth}>September</button>
      <button value="10" onClick={props.handleUpdateMonth}>October</button>
      <button value="11" onClick={props.handleUpdateMonth}>November</button>
      <button value="12" onClick={props.handleUpdateMonth}>December</button>
    </div>

    <h3>Choose Ideal Climate</h3>
    <div id="temperature-container">
      <button id="cold" value="cold" onClick={props.handleUpdateWeather}>Cold</button>
      <button id="warm" value="warm" onClick={props.handleUpdateWeather}>Warm</button>
      <button id="hot" value="hot" onClick={props.handleUpdateWeather}>Hot</button>
    </div>

<<<<<<< HEAD
    <h3>Get Your Options!</h3>
=======
    <div id="cost-container">
      <button value="$" onClick={props.handleUpdateCost}>$</button>
      <button value="$$" onClick={props.handleUpdateCost}>$$</button>
      <button value="$$$" onClick={props.handleUpdateCost}>$$$</button>
      <button value="$$$$" onClick={props.handleUpdateCost}>$$$$</button>
    </div>

>>>>>>> 27d2c528cac6ddc5e3c3e0c75c3cd749b978760e
    <button
      id="search-button"
      onClick={() => props.searchLocation()}
    >Search Locations</button>
  </div>
);

export default SearchForm;
