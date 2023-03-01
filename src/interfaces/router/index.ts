import { RequestHandler, RouterRequest, RouterResponse } from '../controllers/controller';
import general from '../controllers/general-controller';
import usersController from '../controllers/users-controller';

type Routes = Record<string, RequestHandler>;

const routes: Routes = {
  ping: general.ping,
  users: usersController.crudHandler,
};

export default class Router {
  public handle(request: RouterRequest): Promise<RouterResponse> {
    const handler = Object.keys(routes).find((route) => route.match(request.path));
    if (!handler) return Promise.resolve({ statusCode: 404 });
    return routes[handler](request);
  }
}
