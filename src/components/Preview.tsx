import React from 'react';
import { Todo as ITodo } from '../reducer';

interface Props {
  previewTodo: ITodo | null;
}

const Preview: React.FC<Props> = ({ previewTodo }) => {
  return (
    <div>
      <h3>タイトル</h3>
      {previewTodo ? previewTodo.title : null}
      <h4>テキスト</h4>
      {previewTodo ? previewTodo.body : null}
    </div>
  );
};

export default Preview;
