import React from 'react';
import './App.css';

import Todos from './components/Todos';
import Preview from './components/Preview';

const App: React.FC = () => {
  return (
    <div className="App">
      <Todos />
      <Preview />
    </div>
  );
};

export default App;
