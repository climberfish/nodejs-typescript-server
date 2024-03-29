import url from 'url';
import { StringDecoder } from 'string_decoder';
import { IncomingMessage, ServerResponse, Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';
import config from '../config/settings';
import Router from '../../interfaces/router';
import { HttpMethod } from '../../interfaces/controllers/controller';

type ServerType = HttpServer | HttpsServer;

export abstract class Server {
  constructor(private readonly server: ServerType) { }

  public listen() {
    this.server.listen(
      config.port,
      () => console.log(`Server listening on port ${config.port} in ${config.enviromnent} mode`),
    );
  }
}

const router = new Router();

export const defaultRequestListener = (req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  const queryString = parsedUrl.query;

  const method = req.method.toUpperCase();
  if (!Object.keys(HttpMethod).includes(method)) {
    res.writeHead(405);
    res.end();
  }

  const { headers } = req;

  const decoder = new StringDecoder('utf-8');
  let payload = '';
  req.on('data', (data) => { payload += decoder.write(data); });

  req.on('end', async () => {
    payload += decoder.end();

    const data = {
      path: trimmedPath, queryString, method: method as unknown as HttpMethod, headers, payload,
    };

    res.setHeader('Content-Type', 'application/json');

    try {
      const result = await router.handle(data);

      res.writeHead(result.statusCode ?? 200);

      res.end(JSON.stringify(result.payload ?? {}));

      console.log(`"${method.toUpperCase()} ${trimmedPath} ${JSON.stringify(queryString)}" ${result.statusCode}\n${payload}`);
    } catch (error) {
      res.writeHead(500);

      res.end(JSON.stringify({ message: 'Internal server error' }));

      console.log(`"${method.toUpperCase()} ${trimmedPath} ${JSON.stringify(queryString) ?? ''}" 500\n${payload}`);
      console.error(error);
    }
  });
};
