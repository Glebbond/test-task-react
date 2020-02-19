import {
  SEARCH_REPOS_SUCCEEDED,
  FETCH_BRANCHES_SUCCEEDED,
  SELECT_PROJECT,
  TOGGLE_PRELOADER,
  RESET_BRANCHES
} from '../actions/types';

const INITIAL_STATE = {
  repos: [],
  branches: [],
  selectedProject: null,
  preloader: false
};

export default function reposList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_REPOS_SUCCEEDED:
      return {
        ...state,
        repos: action.repos,
      }
    case FETCH_BRANCHES_SUCCEEDED:
      return {
        ...state,
        branches: action.branches,
      }
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.name,
      }

    case TOGGLE_PRELOADER:
      return {
        ...state,
        preloader: action.mode,
      }
    case RESET_BRANCHES:
      return {
        ...state,
        branches: [],
      }
    default:
      return state
  }
}