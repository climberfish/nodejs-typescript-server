import fs from 'fs';
import https from 'https';
import { defaultRequestListener, Server } from './server';

export interface HttpsOptions {
  keyPath: string;
  certPath: string;
}

export class HttpsServer extends Server {
  constructor(private readonly httpsOptions: HttpsOptions) {
    const httpServerOptions = {
      key: fs.readFileSync(httpsOptions.keyPath),
      cert: fs.readFileSync(httpsOptions.certPath),
    };
    const server = https.createServer(httpServerOptions, defaultRequestListener);
    super(server);
  }
}
