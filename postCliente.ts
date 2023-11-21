// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import clienteModel from "./cliente.ts";

const postCliente = async (req: Request, res: Response) => {
  try {
    const { name, dni, saldo } = req.body;
    if (!name || !dni || !saldo) {
      res.status(400).send("faltan datos");
      return;
    }

    const newCliente = new clienteModel({ name, dni, saldo });
    await newCliente.save();

    res.status(200).send({
      name: newCliente.name,
      dni: newCliente.dni,
      saldo: newCliente.saldo,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default postCliente;
