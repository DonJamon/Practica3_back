// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import clienteType from "./cliente.ts";

export const deleteCliente = async (
  req: Request<{ id: string }, {}>,
  res: Response<string | { error: unknown }>,
) => {
  const id = req.params.id;
  const subject = await clienteType.findByIdAndDelete(id).exec();
  if (!subject) {
    res.status(404).send({ error: "no se ha encontrado" });
    return;
  }
  res.status(200).send("borrado");
};