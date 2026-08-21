import { apiRoutes } from "../src/apiRoutes.ts";

const hostname = "0.0.0.0";
const port = 3000;

const server = Bun.serve({
	hostname,
	port,
	routes: apiRoutes,
	// static: {
	// 	// ルーティングが必要なければ fetch でファイルを返すだけでもOK
	// },
	async fetch(req) {
		const url = new URL(req.url);
		const path = url.pathname === "/" ? "/index.html" : url.pathname;
		const file = Bun.file(`./dist${path}`);
		if (await file.exists()) return new Response(file);
		return new Response("Not found", { status: 404 });
	}
});

console.log(`Listening on ${server.url}`);
