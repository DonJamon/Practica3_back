import mongoose from "npm:mongoose@7.6.3";
import { cliente } from "./types.ts";

const Schema = mongoose.Schema;

const clienteType = new Schema(
  {
    name: { type: String, required: true },
    dni: { type: String, required: true },
    saldo: { type: Number, required: true },
  },
  { timestamps: true },
);

export type clienteModelType = mongoose.Document & Omit<cliente, "id">;

export default mongoose.model<clienteModelType>("cliente", clienteType);
