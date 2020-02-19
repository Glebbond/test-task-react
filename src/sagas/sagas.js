import { call, put, takeEvery } from 'redux-saga/effects';

const search = async (searchText) => {
  return await (await fetch(`https://api.github.com/search/repositories?q=${searchText}&sort=stars&order=desc`)).json();
} 

function* searchRepos(action) {
  console.log('action: ', action);
  try {
     const repos = yield call(search, action.payload.searchText);
     console.log('repos: ', repos);
     yield put({type: "SEARCH_REPOS_SUCCEEDED", repos: repos.items});
  } catch (e) {
    console.log('e: ', e);
     yield put({type: "SEARCH_REPOS_FAILED", message: e.message});
  }
}

function* mySaga() {
  yield takeEvery("SEARCH_REPOS", searchRepos);
}

export default mySaga;