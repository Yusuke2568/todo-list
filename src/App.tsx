import React, { useState } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import Todos from './components/Todos';
import Preview from './components/Preview';
import TodoModal from './components/TodoModal';
import EditModal from './components/EditModal';
import SearchAppBar from './components/SearchAppBar';
import { TodosState, Todo as ITodo } from './reducer';

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

  return (
    <div className="App">
      <SearchAppBar />
      Todo
      <Todos todos={todos} onclickHo={openEditModal} />
      <Preview />
      <TodoModal />
      <EditModal
        modalIsOpen={modalIsOpen}
        setModalIsClose={setModalIsClose}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
