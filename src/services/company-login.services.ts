import { CompanyModel } from "../models/company.model";
import { UserSession } from "../models/sessions.model";
import HashingOfPassword from "../utils/password-hashing";
import CreatingToken from "../utils/generate-jwt";
import { TokenModel } from "../models/tokens.model";


class CompanyLoginService{
    static loginService = async (req: any) => {
        try {
            const {email,password} = req;
            const companyCheck = await CompanyModel.findOne({official_email:email});
            if(!companyCheck){
                return null;
            }
            const passwordCheck = await HashingOfPassword.passwordMatching(password,companyCheck.password);
            if(!passwordCheck){
                return null;
            }
            const sessionCheck = await UserSession.findOne({user_id:companyCheck._id});
            if(sessionCheck){
                if(sessionCheck.is_active){
                    return null;
                }
                await UserSession.findOneAndUpdate({user_id:companyCheck._id},{$set:{is_active:true}});
                const accessToken = await CreatingToken.createAccessToken(companyCheck._id);
                const refreshToken = await CreatingToken.createRefreshToken(companyCheck._id);
                await TokenModel.create({user_id:companyCheck._id,refresh_token_id:refreshToken.refreshTokenId,access_token_id:accessToken.accessTokenId});
                return {accessToken, refreshToken};
            }
            await UserSession.create({user_id:companyCheck._id,is_active:true});
            const accessToken = await CreatingToken.createAccessToken(companyCheck._id);
            const refreshToken = await CreatingToken.createRefreshToken(companyCheck._id);
            await TokenModel.create({user_id:companyCheck._id,refresh_token_id:refreshToken.refreshTokenId,access_token_id:accessToken.accessTokenId});
            return {accessToken, refreshToken};
        } catch (error) {
            console.error('There is an error in login service\n',error.message);
            return null;
        }
    }
}
export default CompanyLoginService;