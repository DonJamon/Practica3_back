import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import { deleteCliente } from "./deleteCliente.ts";
import { putCliente } from "./putCliente.ts";
import postCliente from "./postCliente.ts";
import postGestor from "./postGestor.ts";
import postHipoteca from "./postHipoteca.ts";


import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

const env = await load();
const mongo_usr: string | undefined = env.MONGO_USR ||
  Deno.env.get("MONGO_USR");
const mongo_pwd: string | undefined = env.MONGO_PWD ||
  Deno.env.get("MONGO_PWD");
const mongo_uri: string | undefined = env.MONGO_URI ||
  Deno.env.get("MONGO_URI");
const db_name: string | undefined = env.DB_NAME || Deno.env.get("DB_NAME");

if (!mongo_usr || !mongo_pwd || !mongo_uri || !db_name) {
  console.log("Missing env values");
  Deno.exit(1);
}

await mongoose.connect(
  `mongodb+srv://${mongo_usr}:${mongo_pwd}@${mongo_uri}/${db_name}?retryWrites=true&w=majority`,
);

const app = express();
app.use(express.json());
app
  .delete("/deleteCliente/:id", deleteCliente)
  .put("/putCliente/:id/:cantidad", putCliente)
  .post("/postCliente", postCliente)
  .post("/postGestor", postGestor)
  .post("/postHipoteca", postHipoteca);
  
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});