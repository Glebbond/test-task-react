const INITIAL_STATE = [{
  repos: [],
}];

export default function reposList(state = INITIAL_STATE, action) {
  console.log('action>>: ', action);
  switch (action.type) {
    case 'SEARCH_REPOS_SUCCEEDED':
      return {
        ...state,
        repos: action.repos,
      }
    default:
      return state
  }
}