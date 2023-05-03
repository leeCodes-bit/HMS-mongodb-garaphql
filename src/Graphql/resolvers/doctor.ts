import Doctor from "../../model/doctorsModel";
import { DoctorSignup, DoctorLogin } from "./doctorsType";
import { ApolloError } from "apollo-server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const jwtsecret = process.env.JWT_SECRET as string


const DoctorResolver = {
    Mutation: {
        doctorSignup: async (_:unknown, args:DoctorSignup) => {
            try {
                const password = args.input.password
                const email = args.input.email

            interface IKey {[key: string]: string}

            const existingUser = await Doctor.findOne({email}) as unknown as IKey

            if(existingUser){
                throw new ApolloError('Email is already taken')
            };

            const passwordHash = await bcrypt.hash(password.toString(), 8);

                const newDoctor = {
                    doctorsName: args.input.doctorsName,
                    email: args.input.email,
                    specialization: args.input.specialization,
                    gender: args.input.gender,
                    phoneNumber: args.input.phoneNumber,
                    password: passwordHash,
                    token: args.input.token
                };

                const doctor = await Doctor.create(newDoctor);

                const doc = await Doctor.findOne({email}) as unknown as IKey

                const {_id} = doc

                const token = jwt.sign({doctorsId: _id}, jwtsecret, {expiresIn: "30mins"})

                newDoctor.token = token;

                if(doctor){
                    return doctor;
                }
                
            } catch (error) {
                console.log(error)
            }
        },
        doctorLogin: async (_:unknown, args:DoctorLogin) => {
            try {
                const email = args.input.email
                const password = args.input.password

                interface IKey {[key: string]: string}

            const doctor  = await Doctor.findOne({email}) as unknown as IKey

            const validUser = await bcrypt.compare(password.toString(), doctor.password);

            if(doctor && validUser){
                const {_id} = doctor

                const token = jwt.sign({doctorsId: _id}, jwtsecret, {expiresIn: "30mins"});

                doctor.token = token

               return doctor
                
            }else{
                throw new ApolloError('Incorrect password')
            }
                
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default DoctorResolver