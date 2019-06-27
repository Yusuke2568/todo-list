import React, { useState } from 'react';

// style
import './App.css';
import styled from 'styled-components';

// for state
import { useDispatch, useSelector } from 'react-redux';

// components
import AlignItemsList from './components/AlignItemsList';
import Preview from './components/Preview';
import TodoModal from './components/TodoModal';
import EditModal from './components/EditModal';
import SearchAppBar from './components/SearchAppBar';

// actions & reducer
import { add } from './actions/todo';
import { TodosState, Todo as ITodo } from './reducer';

const todosSelector = (state: TodosState) => state.todos;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  const [modalIsOpen, setOpenModal] = useState(false);
  const [editTodo, setEditTodo] = useState<ITodo | null>(null);
  const [previewTodo, setPreviewTodo] = useState<ITodo | null>(null);

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

  const addTodo = (
    id: number,
    title: string,
    body: string,
    check: boolean,
    deadline: string,
  ) => {
    dispatch(add(id, title, body, check, deadline));
  };

  return (
    <div className="App">
      <SearchAppBar />
      <BodyContainer>
        <TodoWrapper>
          <AlignItemsList todos={todos} onclickHo={openEditModal} />
          <TodoModal addTodo={addTodo} />
        </TodoWrapper>
        <Preview previewTodo={previewTodo} />
      </BodyContainer>
      <EditModal
        modalIsOpen={modalIsOpen}
        setModalIsClose={setModalIsClose}
        editTodo={editTodo}
      />
    </div>
  );
};

const BodyContainer = styled.div`
  display: flex;
`;

const TodoWrapper = styled.div`
  flex: 1;
`;

export default App;
