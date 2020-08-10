import { createHash } from "https://deno.land/std/hash/mod.ts";

const hash = createHash("sha256")
hash.update("token");
hash.update("crc_thing");

const hashReturn = hash.toString("base64");

console.log(hashReturn);