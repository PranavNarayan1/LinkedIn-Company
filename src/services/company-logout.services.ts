import { UserSession } from "../models/sessions.model";
import { TokenModel } from "../models/tokens.model";
import CreatingToken from "../utils/generate-jwt";


class LogoutServices{
    static logoutService = async(token: any) => {
        try {
            const decode: any = await CreatingToken.decodeAccessToken(token);
            await TokenModel.findOneAndDelete({access_token_id:decode.jti});
            await UserSession.findOneAndUpdate({user_id:decode.id},{$set:{is_active:false}});
            return true;
        } catch (error) {
            console.error('There is some error in Company logout services\n',error.message);
            return false;
        }
    }
}
export default LogoutServices