import * as Action from './Constants';

export const add = (title: string, body: string, deadline: string) => ({
  type: Action.ADD as typeof Action.ADD,
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
  type: Action.UPDATE as typeof Action.UPDATE,
  payload: {
    id,
    title,
    body,
    check,
    deadline,
  },
});

export const destroy = (id: number) => ({
  type: Action.DESTROY as typeof Action.DESTROY,
  payload: {
    id,
  },
});

export const success = (result: string) => ({
  type: Action.SUCCESS as typeof Action.SUCCESS,
  payload: {
    result,
  },
});

export type TodoAction =
  | ReturnType<typeof add>
  | ReturnType<typeof update>
  | ReturnType<typeof destroy>
  | ReturnType<typeof success>;
