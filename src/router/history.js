import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

export const redirect = (path, state) => path && history.push(path, state);
