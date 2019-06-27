export const ADD = 'ADD';

export const add = (title: string, body: string, deadline: string) => ({
  type: ADD as typeof ADD,
  payload: {
    title,
    body,
    deadline,
  },
});

export type TodoAction = ReturnType<typeof add>;
