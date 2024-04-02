import * as apiHello from './routes/api/hello';

const routeMap = new Map<string, Record<string, RouteHandler>>();

routeMap.set('/api/hello', {
	GET: apiHello.GET,
	POST: apiHello.POST,
});

export default routeMap;

type RouteHandler = (request: Request, env: Env, ctx: ExecutionContext) => Promise<Response>;
