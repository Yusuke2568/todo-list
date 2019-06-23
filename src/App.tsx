import React, { useState } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import Todos from './components/Todos';
import Preview from './components/Preview';
import TodoModal from './components/TodoModal';
import EditModal from './components/EditModal';
import SearchAppBar from './components/SearchAppBar';
import { TodosState, Todo as ITodo } from './reducer';
import { add } from './actions/todo';

const todosSelector = (state: TodosState) => state.todos;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  const [modalIsOpen, setOpenModal] = useState(false);
  const [editTodo, setEditTodo] = useState<ITodo | null>(null);

  const openEditModal = (todo: ITodo) => {
    setEditTodo(todo);
    setOpenModal(true);
  };

  const setModalIsOpen = () => {
    setOpenModal(true);
  };

  const setModalIsClose = () => {
    setOpenModal(false);
  };

  const addTodo = (title: string, body: string) => {
    const id = 5;
    dispatch(add(id, title, body));
  };

  return (
    <div className="App">
      <SearchAppBar />
      <Todos todos={todos} onclickHo={openEditModal} />
      <Preview />
      <TodoModal addTodo={addTodo} />
      <EditModal
        modalIsOpen={modalIsOpen}
        setModalIsClose={setModalIsClose}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
