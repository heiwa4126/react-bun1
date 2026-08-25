import { basename } from "node:path";

// same as
// `bun build ./src/index.html --outdir ./dist --sourcemap linked --target browser --minify --define:process.env.NODE_ENV=production --env="BUN_PUBLIC_*"`
// (but it's too long to type in the terminal, so we can use this script instead)

const startedAt = performance.now();
const result = await Bun.build({
	entrypoints: ["./src/index.html"],
	outdir: "./dist",
	sourcemap: "linked",
	target: "browser",
	minify: true,
	naming: {
		chunk: "index-[hash].[ext]"
	},
	define: {
		"process.env.NODE_ENV": JSON.stringify("production")
	},
	env: "BUN_PUBLIC_*",
	metafile: true
});

if (!result.success) {
	throw new Error("Build failed");
}

const formatSize = (bytes: number) => {
	if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(2)} MB`;
	if (bytes >= 1_000) return `${(bytes / 1_000).toFixed(2)} KB`;
	return `${bytes} bytes`;
};

console.log(
	`Bundled ${Object.keys(result.metafile?.inputs ?? {}).length} modules in ${Math.round(performance.now() - startedAt)}ms\n`
);

for (const output of result.outputs) {
	console.log(
		`  ${basename(output.path).padEnd(24)} ${formatSize(output.size)}    (${output.kind.replace("-", " ")})`
	);
}
