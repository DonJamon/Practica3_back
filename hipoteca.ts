import mongoose from "npm:mongoose@7.6.3";
import { cliente, gestor } from "./types.ts";

const Schema = mongoose.Schema;

const hipotecaType = new Schema(
  {
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
      required: true,
    },
    gestor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gestor",
      required: true,
    },
  },
  { timestamps: true },
);

export type hipotecaModelType = mongoose.Document & {
  cliente: cliente;
  gestor: gestor;
};

export default mongoose.model<hipotecaModelType>("hipoteca", hipotecaType);
