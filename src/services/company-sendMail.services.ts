import { ApplicantModel } from "../models/applicants.model";
import { UserModel } from "../models/user.model";
import MailGeneration from "../utils/generate-email";


class SendingMail{
    static sendMailServices = async(payload: any) => {
        try {
            let emails:any;
            const users: any = await ApplicantModel.find({job_id:payload.job_id,is_selected:true});
            for(users.user_id in users){
                 emails = await UserModel.find({_id:users.user_id}).distinct('email');
            }
            for(const email in emails){
                await MailGeneration.comapnyAcknowledgeMailGeneration(email);
            }
            return true;
        } catch (error) {
            console.error('There is some error in send mail services\n',error.message);
            return false;
        }
    }
}
export default SendingMail;