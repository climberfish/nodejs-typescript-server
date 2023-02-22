import { IncomingHttpHeaders } from 'http';

export enum HttpMethod {
  GET = 'GET',
  HEA = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  CONNECT = 'CONNECT',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
}

export interface RouterRequest {
  path: string;
  queryString: object;
  method: HttpMethod;
  headers: IncomingHttpHeaders;
  payload: string;
}

export interface RouterResponse {
  statusCode?: number;
  payload?: object;
}

export type RequestHandler = (data: RouterRequest) => Promise<RouterResponse>;
