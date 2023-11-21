// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import hipotecaModel from "./hipoteca.ts";

const postHipoteca = async (req: Request, res: Response) => {
  try {
    const { cliente, gestor} = req.body;
    if (!cliente || !gestor ) {
      res.status(400).send("faltan datos");
      return;
    }

    const newHipoteca = new hipotecaModel({ cliente, gestor});
    await newHipoteca.save();

    res.status(200).send({
      cliente: newHipoteca.cliente,
      gestor: newHipoteca.gestor,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default postHipoteca;
