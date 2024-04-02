import routeMap from './routes';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		const path = url.pathname;
		const method = request.method.toUpperCase();

		const routeHandlers = routeMap.get(path);

		if (!routeHandlers) {
			return new Response('Not Found', { status: 404 });
		}

		const handler = routeHandlers[method];

		if (!handler) {
			return new Response('Method Not Allowed', { status: 405 });
		}

		return await handler(request, env, ctx);
	},
};
