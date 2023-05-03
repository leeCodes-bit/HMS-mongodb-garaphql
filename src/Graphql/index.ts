import ReportResolver from "./resolvers/report";
import DoctorResolver from "./resolvers/doctor";

export default {
    Query: {
        ...ReportResolver.Query
    },
    Mutation: {
        ...ReportResolver.Mutation,
        ...DoctorResolver.Mutation
    }
}
