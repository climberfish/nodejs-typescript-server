import general from './controllers/general';

type Routes = Record<string, Function>;

const routes: Routes = {
  'ping': general.ping,
};

export default class Router {
  public handle(data) {
    const handler = routes[data.path] ?? general.notFound;
    return handler(data);
  }
}
