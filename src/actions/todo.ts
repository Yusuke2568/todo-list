import * as ActionType from './Constants';

export const add = (title: string, body: string, deadline: string) => ({
  type: ActionType.ADD as typeof ActionType.ADD,
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
  type: ActionType.UPDATE as typeof ActionType.UPDATE,
  payload: {
    id,
    title,
    body,
    check,
    deadline,
  },
});

export const success = (result: string) => ({
  type: ActionType.SUCCESS as typeof ActionType.SUCCESS,
  payload: {
    result,
  },
});

export type TodoAction =
  | ReturnType<typeof add>
  | ReturnType<typeof update>
  | ReturnType<typeof success>;
