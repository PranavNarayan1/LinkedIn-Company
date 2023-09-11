import { CompanyModel } from "../models/company.model";
import { JobModel } from "../models/jobs.model";
import CreatingToken from "../utils/generate-jwt";


class CreatingJobServices{
    static createJobsService = async(token: any, req: any) => {
        try {
            const decode: any = await CreatingToken.decodeAccessToken(token);
            const companyData = await CompanyModel.findOne({_id:decode.id});
            if(!companyData){
                return false;
            }
            const jobData = req;
            await JobModel.create(jobData);
            return true;
        } catch (error) {
            console.error('There is some error in create job service\n',error.message);
            return false;
        }
    }
}
export default CreatingJobServices;