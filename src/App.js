import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
// Header 컴포넌트 불러오기
import Header from './components/Header';

// Home 컴포넌트 불러오기
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
