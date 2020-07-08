import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";

// server config
const HOST = "127.0.0.1";
const PORT = 7700;

const app = new Application();

// app.use((ctx: any) => {
//   ctx.response.body = "Hello world!";
// });

app.use(router.routes());
app.use(router.allowedMethods());


console.log(`Listening on: ${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`);