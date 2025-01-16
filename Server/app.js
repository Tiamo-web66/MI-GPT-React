import config from "./.migpt.example.js";
import { MiGPT } from "./dist/index.cjs";

async function main() {
  const client = MiGPT.create(config);
  await client.start();
}

main();
