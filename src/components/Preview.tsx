import React from 'react';
import { Marked } from 'marked-ts';
import { Todo as ITodo } from '../reducer';

interface Props {
  previewTodo: ITodo | null;
}

const Preview: React.FC<Props> = ({ previewTodo }) => {
  const previewText = previewTodo ? previewTodo.body : '- こんにちは';

  return (
    <div>
      <h3>タイトル</h3>
      {previewTodo ? previewTodo.title : null}
      <h4>テキスト</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: Marked.parse(previewText),
        }}
      ></div>
    </div>
  );
};

export default Preview;
