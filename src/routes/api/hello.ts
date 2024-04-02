export async function GET(request: Request, env: Env) {
	// env.KV.put('hello', 'world');
	return new Response('Hello, World!');
}

export async function POST(request: Request) {
	return new Response('Method Not Allowed', { status: 405 });
}
