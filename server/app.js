import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import {graphqlHTTP} from 'express-graphql';
import schema from './schema/schema.js'

import connectDB from './config/db.js';

connectDB();

const app = express()



app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))


app.listen(5000, ()=>console.log(`Servidor en puerto 5000`))

process.on("unhandledRejection", (err,promise)=>{
    console.log(`Logged Error: ${err}`);
    server.close(()=>process.exit(1))
});


