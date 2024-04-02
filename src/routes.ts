import * as apiHello from './routes/api/hello';

const routeMap = new Map<string, Record<string, RouteHandler>>();

routeMap.set('/api/hello', {
	GET: apiHello.GET,
	POST: apiHello.POST,
});

// Add more route mappings as needed
// routeMap.set('/api/otherRoute', { ... });

export default routeMap;

type RouteHandler = (request: Request, env: Env, ctx: ExecutionContext) => Promise<Response>;
