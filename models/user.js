import { model, Schema } from "mongoose";

let userSchema = new Schema(
  {
    _id: { type: Schema.ObjectId, auto: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true},
  },
  {
    versionKey: false,
  }
);
const User = model("User", userSchema);
export {User}