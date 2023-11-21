// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";

import { cliente } from "./types.ts";
import clienteType from "./cliente.ts";
import { clienteModelType } from "./cliente.ts";

export const putCliente = async (
  req: Request<{ id: string; amount: string }, {}, clienteModelType>,
  res: Response<cliente | { error: unknown }>,
) => {
  const id = req.params.id;
  const amount = parseInt(req.params.amount, 10);

  try {
    const client = await clienteType.findByIdAndUpdate(
      id,
      { $inc: { balance: amount } }, 
      { new: true, runValidators: true },
    );

    if (!client) {
      res.status(404).send({ error: "no se ha encontrado" });
      return;
    }

    res.status(200).json().send();
  } catch (error) {
    res.status(500).send(error);
  }
};