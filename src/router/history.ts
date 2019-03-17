import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const redirect = (path: string, state?: string) => path && history.push(path, state);
