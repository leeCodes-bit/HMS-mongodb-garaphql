import express from 'express';
import mongoose from 'mongoose'
import {ApolloServer} from 'apollo-server';
import dotenv from 'dotenv';
dotenv.config();
import{mergeTypeDefs} from "@graphql-tools/merge"
import logger from 'morgan'
import doctorTypeDefs from './Graphql/type-defs/doctorTypeDefs';
import reportTypeDefs from './Graphql/type-defs/reportTypeDefs';
import resolvers from './Graphql'

const app = express();
app.use(logger('dev'));

mongoose.connect(process.env.DATABASE_URL! )
.then(()=>{
    console.log('Database connected successfully!')
});

const typeDefs = mergeTypeDefs([doctorTypeDefs,reportTypeDefs]);

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const port  = 4001
server.listen(port, ()=>{
   console.log(`app listening on port http://localhost:${port}...`)
})



