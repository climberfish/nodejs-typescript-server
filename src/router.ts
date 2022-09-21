import { IncomingHttpHeaders } from 'http';
import general from './controllers/general-controller';
import usersController from './controllers/users-controller';

type Routes = Record<string, Function>;

const routes: Routes = {
  'ping': general.ping,
  'users': usersController.crudHandler,
};

export enum HttpMethod {
  GET = 'GET',
  HEA = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  CONNECT = 'CONNECT',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
};

export interface RouterRequest {
  path: string;
  queryString: Object;
  method: HttpMethod;
  headers: IncomingHttpHeaders;
  payload: string;
}

export interface RouterResponse {
  statusCode?: number;
  payload?: Object;
}

export default class Router {
  public handle(request: RouterRequest): RouterResponse {
    for (const route of Object.keys(routes)) {
      if (route.match(request.path)) return routes[request.path](request);
    }
    return { statusCode: 404 };
  }
}
