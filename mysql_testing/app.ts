import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
    hostname: "localhost",
    username: "root",
    db: "testingquotes",
    password: ""
  });

const id = 1;

const quotes = await client.query(`SELECT * FROM Quotes WHERE Id=${id};`);
const allQuotes = await client.query(`SELECT * FROM Quotes;`);

console.log(quotes);
console.log("\n");
console.log(allQuotes);
