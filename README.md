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

buildしたコードをサーブするスクリプトを追加しました。

```bash
bun run build
bun run preview
```

## TODO

bun だけだとバンドルの minify なんかがやっぱり甘いような気がする。

でもなんか同時に API っぽいものが動いてるのは不思議。
