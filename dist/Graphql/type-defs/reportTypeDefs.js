"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const reportTypeDefs = (0, apollo_server_1.gql) `
type Reports {
    id:ID!,
    patientName: String,
    age: Int,
    hospitalName: String,
    weight: String,
    height: String,
    bloodGroup: String,
    genotype: String,
    bloodPressure: String,
    HIV_status: String,
    hepatitis: String,
}

type Message {
    message:String
}

input CreateReportInput{
    patientName: String!,
    age: Int!,
    hospitalName: String!,
    weight: String!,
    height: String!,
    bloodGroup: String!,
    genotype: String!,
    bloodPressure: String!,
    HIV_status: String!,
    hepatitis: String!
}

input UpdateReportInput{
    id:ID!,
    patientName: String,
    age: Int,
    hospitalName: String,
    weight: String,
    height: String,
    bloodGroup: String,
    genotype: String,
    bloodPressure: String,
    HIV_status: String,
    hepatitis: String
}

type Query{
allReports:[Reports]!
singleReport(id:ID!):Reports
}

 type Mutation{
    createReport(input:CreateReportInput):Reports
    updateReport(input:UpdateReportInput):Reports
    deleteReport(id:ID!):Message!
 }
`;
exports.default = reportTypeDefs;
