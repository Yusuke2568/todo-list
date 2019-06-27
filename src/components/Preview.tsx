import React from 'react';

// style
import styled from 'styled-components';

// markdown library
import { Marked } from 'marked-ts';

// reducer
import { Todo as ITodo } from '../reducer';

interface Props {
  previewTodo: ITodo | null;
}

const Preview: React.FC<Props> = ({ previewTodo }) => {
  const previewText = previewTodo ? previewTodo.body : '- こんにちは';

  return (
    <PreviewWrapper>
      <h3>タイトル</h3>
      {previewTodo ? previewTodo.title : null}
      <h4>テキスト</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: Marked.parse(previewText),
        }}
      ></div>
      <h4>完了状態</h4>
      {previewTodo && previewTodo.check ? '完了' : '未完了'}
    </PreviewWrapper>
  );
};

const PreviewWrapper = styled.div`
  flex: 1;
  text-align: left;
`;

export default Preview;
