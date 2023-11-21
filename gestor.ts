import mongoose from "npm:mongoose@7.6.3";
import { gestor } from "./types.ts";

const Schema = mongoose.Schema;

const gestorType = new Schema(
  {
    name: { type: String, required: true },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
      required: true,
    },
  },
  { timestamps: true },
);

export type gestorModelType = mongoose.Document & Omit<gestor, "id">;

export default mongoose.model<gestorModelType>("gestor", gestorType);