import http from 'http';
import { defaultRequestListener, Server } from './server';

export class HttpServer extends Server {
  constructor() {
    const server = http.createServer(defaultRequestListener);
    super(server);
  }
}
