"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const doctorsModel_1 = __importDefault(require("../../model/doctorsModel"));
const apollo_server_1 = require("apollo-server");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jwtsecret = process.env.JWT_SECRET;
const DoctorResolver = {
    Mutation: {
        doctorSignup: async (_, args) => {
            try {
                const password = args.input.password;
                const email = args.input.email;
                const existingUser = await doctorsModel_1.default.findOne({ email });
                if (existingUser) {
                    throw new apollo_server_1.ApolloError('Email is already taken');
                }
                ;
                const passwordHash = await bcryptjs_1.default.hash(password.toString(), 8);
                const newDoctor = {
                    doctorsName: args.input.doctorsName,
                    email: args.input.email,
                    specialization: args.input.specialization,
                    gender: args.input.gender,
                    phoneNumber: args.input.phoneNumber,
                    password: passwordHash,
                    token: args.input.token
                };
                const doctor = await doctorsModel_1.default.create(newDoctor);
                const doc = await doctorsModel_1.default.findOne({ email });
                const { _id } = doc;
                const token = jsonwebtoken_1.default.sign({ doctorsId: _id }, jwtsecret, { expiresIn: "30mins" });
                newDoctor.token = token;
                if (doctor) {
                    return doctor;
                }
            }
            catch (error) {
                console.log(error);
            }
        },
        doctorLogin: async (_, args) => {
            try {
                const email = args.input.email;
                const password = args.input.password;
                const doctor = await doctorsModel_1.default.findOne({ email });
                const validUser = await bcryptjs_1.default.compare(password.toString(), doctor.password);
                if (doctor && validUser) {
                    const { _id } = doctor;
                    const token = jsonwebtoken_1.default.sign({ doctorsId: _id }, jwtsecret, { expiresIn: "30mins" });
                    doctor.token = token;
                    return doctor;
                }
                else {
                    throw new apollo_server_1.ApolloError('Incorrect password');
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }
};
exports.default = DoctorResolver;
