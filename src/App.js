import React from 'react';
import "./App.css";
import SearchPage from './components/SearchPage'

function App() {
  return (
    <div >
      <div className="header">
        <h3>Search Repositories</h3>
      </div>
      <SearchPage />
    </div>
  );
}

export default App;
