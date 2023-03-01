import UserRepository from '../../domain/repositories/user-repository';
import { HttpMethod, RequestHandler } from './controller';

const crudHandler: RequestHandler = (request) => {
  if (request.method === HttpMethod.POST) {
    return create(request);
  }
  return Promise.resolve({ statusCode: 500 });
};

const create: RequestHandler = (request) => {
  const userData = JSON.parse(request.payload);
  const user = UserRepository.create(userData);
  return Promise.resolve({ payload: user });
};

export default { crudHandler };
