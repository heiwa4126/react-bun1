# react-bun1

2026-08 に bun 1.4 を記念して

```sh
mkdir react-bun1 && cd !$
bun init --react
```

で作ったテストプロジェクト。

[Build a React app with Bun | Bun Guides](https://bun.com/guides/ecosystem/react)

## 開発

To install dependencies:

```bash
bun ci
```

To start a development server:

```bash
bun dev
```

To run for production:

```bash
# build は不要
bun start
```

This project was created using `bun init` in bun v1.4.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

### 追加

build したコードをサーブするスクリプトを追加しました。
API っぽいやつ (src/apiRoutes.ts) も動くようにしました。

```bash
bun run build
bun run preview
```

### ビルドのコマンドが長すぎるので

`./build.ts` にした。もとは `bun run build-cli` で、そこから以下の機能を追加

- dist/ を消す
- sourcemap 作らない
- esm.sh で一部モジュールを CDN から読むテスト (index.html は手動)
- `console.log()` や `debug()` をバンドル時に消す

## TODO

bun だけだとバンドルのツリーシェイキングや minify なんかが甘いような気がする。
とりあえず https://bun.com/blog/bun-bundler 読んで、チャンク分割や、特定モジュールのバンドル除外ができないか調べる。
あと `bun bundle src/index.html ...` って不思議なので、これも調べる。

でもなんか同時に API っぽいものが動いてるのは不思議 → これは Bun.serve() がやってた。
