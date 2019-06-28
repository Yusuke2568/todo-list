import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as Action from './actions/Constants';
import { success, add, update } from './actions/todo';

// ワーカー Saga: USER_FETCH_REQUESTED Action によって起動する
function* fetchTodos(action: ReturnType<typeof add>) {
  const { title, body, deadline } = action.payload;
  try {
    console.log(action.payload);
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(success('success'));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// ワーカー Saga: USER_FETCH_REQUESTED Action によって起動する
function* fetchTodos2(action: ReturnType<typeof update>) {
  const { id, title, body, check, deadline } = action.payload;
  try {
    console.log(action.payload);
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(success('success'));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  代わりに takeLatest を使うこともできます。

  しかし、ユーザ情報の並列取得には対応しません。
  もしレスポンス待ちの状態で USER_FETCH_REQUESTED を受け取った場合、
  待ち状態のリクエストはキャンセルされて最後の1つだけが実行されます。
*/
export function* mySaga() {
  yield takeLatest(Action.ADD, fetchTodos);
}

export function* mySaga2() {
  yield takeLatest(Action.UPDATE, fetchTodos2);
}

export default function* rootSaga() {
  yield all([fork([mySaga, mySaga2])]);
}
