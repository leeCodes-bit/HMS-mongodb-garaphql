import { Report } from "../../model/reportModel"
import { CreateReport, UpdateReport, DeleteReport } from "./reportType";

const ReportResolver = {
    Query: {
        allReports:async () => {
            try {
                const report  = await Report.find()

                return report; 

            } catch (error) {
                console.log(error)
            }
        }
    },

    Mutation: {
        createReport: async (_:unknown, args:CreateReport) => {
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

                const report = await Report.create(newReport);

                if(report){
                    return report;
                }
                
            } catch (error) {
                console.log(error)
            }
        },

        updateReport: async(_:unknown, args:UpdateReport) => {
            try {
                const id = args.input.id

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

                const updateNew = await Report.findByIdAndUpdate(id, updateReport, {new: true});

                if(updateNew){
                    return updateNew;
                }

            } catch (error) {
                console.log(error)
            }
        },

        deleteReport:async (_:unknown, {id}:DeleteReport) => {
            try {
                const message = {message:"Deleted Successfully"}

                const report = await Report.deleteOne({_id:id});

                if(!report){
                    throw new Error('Report not found')
                }

                return message

            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default ReportResolver