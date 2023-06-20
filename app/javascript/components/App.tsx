import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SakeList from './SakeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SakeList />} />
      </Routes>
    </Router>
  );
}

export default App;
