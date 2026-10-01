import { serve } from "bun";
import { apiRoutes } from "./apiRoutes.ts";
import index from "./index.html";

const port = Number(process.env.PORT ?? 3000);

const server = serve({
	port,
	routes: {
		...apiRoutes,

		// Serve index.html for all unmatched routes.
		"/*": index
	},

	development: process.env.NODE_ENV !== "production" && {
		// Enable browser hot reloading in development
		hmr: true,

		// Echo console logs from the browser to the server
		console: true
	}
});

console.log(`🚀 Server running at ${server.url}`);
