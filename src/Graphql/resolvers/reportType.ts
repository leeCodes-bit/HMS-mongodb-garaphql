export interface Report{
    patientName: String,
    age: Number,
    hospitalName: String,
    weight: String,
    height: String,
    bloodGroup: String,
    genotype: String,
    bloodPressure: String,
    HIV_status: String,
    hepatitis: String
}

export interface CreateReport {
    input: Report
};

export interface ArgsForUpdateReport{
    id:string,
    patientName: String,
    age: Number,
    hospitalName: String,
    weight: String,
    height: String,
    bloodGroup: String,
    genotype: String,
    bloodPressure: String,
    HIV_status: String,
    hepatitis: String
};

export interface UpdateReport {
    input: ArgsForUpdateReport
};

export interface DeleteReport{
    id:string
};