import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";


import schema from "../graphql/index";

const app = express();
const PORT = process.env.PORT || "4000";

let dev_db_url = 'mongodb://Himani:himani123@ds161224.mlab.com:61224/vidly';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
      schema,
      graphiql: true
    })
  );
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

