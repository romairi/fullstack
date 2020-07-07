
const BASE_API_PATH = '/api';

// AUTH API
const AUTH_PATH = `${BASE_API_PATH}/auth`;
export const LOGIN_PATH = `${AUTH_PATH}/login`;
export const SIGNUP_PATH = `${AUTH_PATH}/signup`;
export const LOGOUT_PATH = `${AUTH_PATH}/logout`;

// PAPERS API
const PAPERS_API_PATH = `${BASE_API_PATH}/papers`;
export const GET_CATEGORIES_PATH = `${PAPERS_API_PATH}/get_categories`;
export const SEARCH_PAPERS_PATH = `${PAPERS_API_PATH}/search_papers`;
export const SAVE_PAPER_PATH = `${PAPERS_API_PATH}/save_paper`;
export const REMOVE_PAPER_PATH = `${PAPERS_API_PATH}/remove_paper`;

// CATEGORIES API
const CATEGORIES_API_PATH = `${BASE_API_PATH}/categories`;
export const ADD_CATEGORY_PATH = `${CATEGORIES_API_PATH}/add_category`;
