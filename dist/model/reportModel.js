"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reportSchema = new mongoose_1.default.Schema({
    patientName: { type: String, required: true },
    age: { type: Number, required: true },
    hospitalName: { type: String, required: true },
    weight: { type: String, required: true },
    height: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    genotype: { type: String, required: true },
    bloodPressure: { type: String, required: true },
    HIV_status: { type: String, required: true },
    hepatitis: { type: String, required: true },
    // doctorsId:{type: mongoose.Schema.Types.ObjectId, required: true}
}, {
    timestamps: true,
});
exports.Report = mongoose_1.default.model("Report", reportSchema);
