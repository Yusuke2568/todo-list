export const ADD = 'ADD';

export const add = (id: number, title: string, body: string) => ({
  type: ADD as typeof ADD,
  payload: {
    id,
    title,
    body,
  },
});

export type TodoAction = ReturnType<typeof add>;
