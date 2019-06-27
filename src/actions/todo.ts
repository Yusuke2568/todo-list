export const ADD = 'ADD';

export const add = (
  id: number,
  title: string,
  body: string,
  check: boolean,
  deadline: string,
) => ({
  type: ADD as typeof ADD,
  payload: {
    id,
    title,
    body,
    check,
    deadline,
  },
});

export type TodoAction = ReturnType<typeof add>;
