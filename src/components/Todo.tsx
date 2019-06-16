import React from 'react';

export interface TodoProps {
  title: string;
  body: string;
}

const Todo: React.FC<TodoProps> = ({ title = '', body = '' }) => {
  return (
    <>
      {title}
      {body}
    </>
  );
};

export default Todo;
