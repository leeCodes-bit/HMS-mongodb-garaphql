import { gql } from "apollo-server";

const doctorTypeDefs = gql`
type Doctor {
    id:ID!,
    doctorsName: String,
    email: String,
    specialization: String,
    gender: String,
    phoneNumber: String,
    password: String,
    token: String
}

type Message {
    message:String
}

input CreateDoctorInput{
    doctorsName: String!,
    email: String,
    specialization: String!,
    gender: String!,
    phoneNumber: String!,
    password: String!
}

input DoctorLoginInput{
    email: String!,
    password: String!
}

type Query{
allReports:[Reports]!
singleReport(id:ID!):Reports
}


 type Mutation{
    doctorSignup(input:CreateDoctorInput):Doctor
    doctorLogin(input:DoctorLoginInput):Doctor
 }
`

export default doctorTypeDefs;