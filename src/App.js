import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from './components/News';
import Todos from './components/TodoApp/Todo';
import NavRow from './components/Nav'

function App() {
  return (
    <div className="App">
      <News />  
      <Todos />
    </div>
  );
}

export default App;
