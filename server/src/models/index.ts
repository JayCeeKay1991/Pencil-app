import  mongoose from "mongoose";
import { config } from "dotenv";
config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.4tskvme.mongodb.net/?retryWrites=true&w=majority&appName=pencil`)
.then(con => {
  console.log(`connected to ${con.connection.host}`)
  return con;
})
.catch(err => console.error(err))

export default mongoose