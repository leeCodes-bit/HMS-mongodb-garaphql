"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const doctorSchema = new mongoose_1.default.Schema({
    doctorsName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialization: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String }
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            ret.doctorsId = ret._id,
                delete ret._id,
                delete ret.password,
                delete ret.__v;
        }
    }
});
const Doctor = mongoose_1.default.model("Doctor", doctorSchema);
exports.default = Doctor;
