import { RouterRequest, RouterResponse } from '../router';

export type RequestHandler = (data: RouterRequest) => RouterResponse;