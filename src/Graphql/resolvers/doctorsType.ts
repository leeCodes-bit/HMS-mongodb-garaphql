export interface Doctor{
    doctorsName: String,
    email: String,
    specialization: String,
    gender: String,
    phoneNumber: String,
    password: String,
    token: String

}

export interface DoctorSignup {
    input: Doctor
};

export interface Doc{
    email: String,
    password: String,

}

export interface DoctorLogin {
    input: Doc
};