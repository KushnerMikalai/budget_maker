# Deno App

## Getting Started

```shell script
deno cache ./deps.ts
deno cache --unstable ./deps.ts
```

## Run deno

```shell script
deno run --allow-net --allow-env --allow-write --allow-read --allow-plugin --unstable sever.ts

deno run --allow-net app.ts
```

or

```shell script
deno run --allow-net --allow-write --allow-read --allow-plugin --unstable app.ts
```

and open http://localhost:8080

## How get query

```typescript
import { getQuery } from 'https://deno.land/x/oak/helpers.ts';

const search = getQuery(ctx, { mergeParams: true });
console.log(search);
```
