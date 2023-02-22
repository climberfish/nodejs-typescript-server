import { RouterRequest, RouterResponse } from './controllers/controller';
import general from './controllers/general-controller';
import usersController from './controllers/users-controller';

type Routes = { [key: string]: (data: RouterRequest) => RouterResponse; };

const routes: Routes = {
  ping: general.ping,
  users: usersController.crudHandler,
};

export default class Router {
  public handle(request: RouterRequest): RouterResponse {
    const handler = Object.keys(routes).find((route) => route.match(request.path));
    if (!handler) return { statusCode: 404 };
    return routes[handler](request);
  }
}
