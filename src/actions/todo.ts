export const ADD = 'ADD';
export const UPDATE = 'UPDATE';

export const add = (title: string, body: string, deadline: string) => ({
  type: ADD as typeof ADD,
  payload: {
    title,
    body,
    deadline,
  },
});

export const update = (
  id: number,
  title: string,
  body: string,
  check: boolean,
  deadline: string,
) => ({
  type: UPDATE as typeof UPDATE,
  payload: {
    id,
    title,
    body,
    check,
    deadline,
  },
});

export type TodoAction = ReturnType<typeof add> | ReturnType<typeof update>;
