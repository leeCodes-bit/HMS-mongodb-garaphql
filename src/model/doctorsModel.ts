import mongoose from 'mongoose';

export interface DoctorInstance{
    _id:string,
    doctorsName: string,
    email: string, // no duplicates allowed.
    specialization: string,
    gender: string,
    phoneNumber: string,
    password: string,
    token: string
   }

const doctorSchema = new mongoose.Schema({
    doctorsName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    specialization: {type: String, required: true},
    gender:{type: String, required: true},
    phoneNumber:{type: String, required: true},
    password:{type: String, required: true},
    token:{type: String}
},{
    timestamps: true,
    toJSON:{
        transform(doc, ret){
            ret.doctorsId = ret._id,
            delete ret._id,
            delete ret.password,
            delete ret.__v
        }
    }
})

const Doctor = mongoose.model<DoctorInstance>("Doctor", doctorSchema);

export default Doctor;