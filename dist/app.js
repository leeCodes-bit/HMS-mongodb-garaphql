"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const apollo_server_1 = require("apollo-server");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const merge_1 = require("@graphql-tools/merge");
const morgan_1 = __importDefault(require("morgan"));
const doctorTypeDefs_1 = __importDefault(require("./Graphql/type-defs/doctorTypeDefs"));
const reportTypeDefs_1 = __importDefault(require("./Graphql/type-defs/reportTypeDefs"));
const Graphql_1 = __importDefault(require("./Graphql"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
mongoose_1.default.connect(process.env.DATABASE_URL)
    .then(() => {
    console.log('Database connected successfully!');
});
const typeDefs = (0, merge_1.mergeTypeDefs)([doctorTypeDefs_1.default, reportTypeDefs_1.default]);
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers: Graphql_1.default
});
const port = 4001;
server.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}...`);
});
