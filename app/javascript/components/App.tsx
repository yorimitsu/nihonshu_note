import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SakeList from './SakeList';
import SakeDetail from './SakeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SakeList />} />
        <Route path="/sake/:id" element={<SakeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
