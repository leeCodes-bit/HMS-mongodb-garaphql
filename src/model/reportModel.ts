import mongoose from 'mongoose';

export interface ReportInstance {
    _id:string,
    patientName: string,
    age: number,
    hospitalName: String,
    weight: string,
    height: string,
    bloodGroup: string,
    genotype: string,
    bloodPressure: string,
    HIV_status: string,
    hepatitis: string,
    // doctorsId: string
}

const reportSchema = new mongoose.Schema({
    patientName: {type: String, required: true},
    age: {type: Number, required: true},
    hospitalName: {type: String, required: true},
    weight:{type: String, required: true},
    height:{type: String, required: true},
    bloodGroup:{type: String, required: true},
    genotype:{type: String, required: true},
    bloodPressure:{type: String, required: true},
    HIV_status:{type: String, required: true},
    hepatitis:{type: String, required: true},
    // doctorsId:{type: mongoose.Schema.Types.ObjectId, required: true}
},{
    timestamps: true,
})

export const Report = mongoose.model<ReportInstance>("Report", reportSchema);
