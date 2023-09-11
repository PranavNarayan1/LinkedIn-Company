import { CompanyModel } from "../models/company.model";
import CreatingToken from "../utils/generate-jwt";
import GenerateOtp from "../utils/generate-otp";
import redisClient from '../databases/redis';
import MailGeneration from "../utils/generate-email";



class ForgetPasswordService{
    static forgetPasswordService = async(token: any, req: any) => {
        try {
            const decode: any = CreatingToken.decodeAccessToken(token);
            const userData: any = CompanyModel.findById({_id:decode.id});
            const otp: number = await GenerateOtp.generateOtp();
            await redisClient.setEx(`${userData.email}`,5 * 60,`${otp}`);
            const result = await MailGeneration.userForgetPasswordMailGeneration(userData.email,otp);
            if(!result){
                return false;
            }
            return true;
        } catch (error) {
            console.error('There is some error in forget password service\n',error.message);
            return false;
        }
    }
}
export default ForgetPasswordService;