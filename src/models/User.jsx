import { Schema, model, models } from 'mongoose';
const stockSchema = new Schema({
  name: String,
  quantity: Number,
  averagePrice: Number,
});

const userSchema = new Schema({
  username: { type: String, unique: true },
  email: String,
  password: { type: String, unique: true },
  role: String, 
  stocksAvailable: [stockSchema],
});

const User = models.User || model("User", userSchema);

export default User;
