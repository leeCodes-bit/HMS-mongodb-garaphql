"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const report_1 = __importDefault(require("./resolvers/report"));
const doctor_1 = __importDefault(require("./resolvers/doctor"));
exports.default = {
    Query: {
        ...report_1.default.Query
    },
    Mutation: {
        ...report_1.default.Mutation,
        ...doctor_1.default.Mutation
    }
};
