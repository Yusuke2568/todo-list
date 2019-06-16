import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import Todos from './components/Todos';
import Preview from './components/Preview';
import { TodosState } from './reducer';

const todosSelector = (state: TodosState) => state.todos;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  return (
    <div className="App">
      Todo
      <Todos todos={todos} />
      <Preview />
    </div>
  );
};

export default App;
