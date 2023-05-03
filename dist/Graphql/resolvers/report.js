"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reportModel_1 = require("../../model/reportModel");
const ReportResolver = {
    Query: {
        allReports: async () => {
            try {
                const report = await reportModel_1.Report.find();
                return report;
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        createReport: async (_, args) => {
            try {
                const newReport = {
                    patientName: args.input.patientName,
                    age: args.input.age,
                    hospitalName: args.input.hospitalName,
                    weight: args.input.weight,
                    height: args.input.height,
                    bloodGroup: args.input.bloodGroup,
                    genotype: args.input.genotype,
                    bloodPressure: args.input.bloodPressure,
                    HIV_status: args.input.HIV_status,
                    hepatitis: args.input.hepatitis
                };
                const report = await reportModel_1.Report.create(newReport);
                if (report) {
                    return report;
                }
            }
            catch (error) {
                console.log(error);
            }
        },
        updateReport: async (_, args) => {
            try {
                const id = args.input.id;
                const updateReport = {
                    id: args.input.id,
                    patientName: args.input.patientName,
                    age: args.input.age,
                    hospitalName: args.input.hospitalName,
                    weight: args.input.weight,
                    height: args.input.height,
                    bloodGroup: args.input.bloodGroup,
                    genotype: args.input.genotype,
                    bloodPressure: args.input.bloodPressure,
                    HIV_status: args.input.HIV_status,
                    hepatitis: args.input.hepatitis
                };
                const updateNew = await reportModel_1.Report.findByIdAndUpdate(id, updateReport, { new: true });
                if (updateNew) {
                    return updateNew;
                }
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteReport: async (_, { id }) => {
            try {
                const message = { message: "Deleted Successfully" };
                const report = await reportModel_1.Report.deleteOne({ _id: id });
                if (!report) {
                    throw new Error('Report not found');
                }
                return message;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
};
exports.default = ReportResolver;
