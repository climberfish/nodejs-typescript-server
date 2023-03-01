import { HttpMethod, RequestHandler } from './controller';

const ping: RequestHandler = (request) => {
  if (request.method === HttpMethod.GET) {
    return Promise.resolve({ statusCode: 200 });
  }
  return Promise.resolve({ statusCode: 405 });
};

export default { ping };
