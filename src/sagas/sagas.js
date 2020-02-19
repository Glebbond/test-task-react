import { call, put, takeEvery } from 'redux-saga/effects';

const search = async (searchText) => {
  return await (await fetch(`https://api.github.com/search/repositories?q=${searchText}&sort=stars&order=desc`)).json();
} 

const fetchBranche = async (data) => {
  return await (await fetch(`https://api.github.com/repos/${data.owner}/${data.proj}/branches`)).json();
} 

export function* searchRepos(action) {
  try {
    const repos = yield call(search, action.payload.searchText);
    yield put({type: "SEARCH_REPOS_SUCCEEDED", repos: repos.items});
    yield put({type: "TOGGLE_PRELOADER", mode: false});
  } catch (e) {
    yield put({type: "SEARCH_REPOS_FAILED", message: e.message});
    yield put({type: "TOGGLE_PRELOADER", mode: false});
  }
}

export function* fetchBranches(action) {
  try {
    const branches = yield call(fetchBranche, action.payload);
    yield put({type: "FETCH_BRANCHES_SUCCEEDED", branches: branches});
    yield put({type: "TOGGLE_PRELOADER", mode: false});
  } catch (e) {
    yield put({type: "FETCH_BRANCHES_FAILED", message: e.message});
    yield put({type: "TOGGLE_PRELOADER", mode: false});
  }
}

export function* mySaga() {
  yield takeEvery("SEARCH_REPOS", searchRepos);
  yield takeEvery("FETCH_BRANCHES", fetchBranches);
}
