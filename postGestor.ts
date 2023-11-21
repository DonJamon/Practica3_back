// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import gestorModel from "./gestor.ts";

const postGestor = async (req: Request, res: Response) => {
  try {
    const { name, cliente } = req.body;
    if (!name || !cliente) {
      res.status(400).send("faltan datos");
      return;
    }

    const newGestor = new gestorModel({ name, cliente });
    await newGestor.save();

    res.status(200).send({
      name: newGestor.name,
      cliente: newGestor.cliente,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default postGestor;
