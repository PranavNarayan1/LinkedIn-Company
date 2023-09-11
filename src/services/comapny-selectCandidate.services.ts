import { ApplicantModel } from "../models/applicants.model";



class SelectCandidateServices{
    static selectCandidateService = async(payload: any) => {
        try {
            const {userId,jobId} = payload;
            await ApplicantModel.findOneAndUpdate({user_id:userId,job_id:jobId},{$set:{is_selected:true}});
            return true;

        } catch (error) {
            console.error('There is some error in select candidate service\n',error.message);
            return false;
        }
    }
}
export default SelectCandidateServices;