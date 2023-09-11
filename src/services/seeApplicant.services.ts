import { ApplicantModel } from "../models/applicants.model";
import { UserModel } from "../models/user.model";
import CreatingToken from "../utils/generate-jwt";



class SeeApplicantsService{
    static seeAllApplicantsServices = async(token: any, req: any) => {
        try {
            const users: any[] =[];
            const decode: any = CreatingToken.decodeAccessToken(token);
            const jobId = req;
            const applicants: any =  await ApplicantModel.find({job_id:jobId});
            for(applicants.user_id in applicants){
                const userData = await UserModel.findOne({_id:applicants.user_id});
                users.push(userData);
            }
            return users;

        } catch (error) {
            console.error('There is some error in see all applicants service\n',error.message);
            return false;
        }
    }
}
export default SeeApplicantsService;