import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { v4 as uuidv4} from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

class CreatingToken{
    static createAccessToken = async(companyId:ObjectId) => {
        try {
            const accessTokenId = uuidv4();
            const payload = {id:companyId};
            const secret = process.env.COMPANY_ACCESS_TOKEN_SECRET;
            const option = {expiresIn:"15m",jwtid:accessTokenId }
            let token = jwt.sign(payload,secret,option);
            return {accessTokenId,token};
            
        } catch (error) {
            console.error('There is an error inareate access token function\n',error.message);
        }
    }

    static createRefreshToken = async(companyId: ObjectId) => {
        const refreshTokenId = uuidv4();
        const payload ={id: companyId};
        const secret = process.env.COMPANY_REFRESH_TOKEN_SECRET;
        const option = {expiresIn:"1 d",jwtid:refreshTokenId};
        let token = jwt.sign(payload,secret,option);
        return{refreshTokenId,token};
        
    }

    static decodeAccessToken = async(token: any) => {
        return jwt.verify(token, process.env.COMPANY_ACCESS_TOKEN_SECRET);
    }

    static decodeRefreshToken = async(token: any) => {
        return jwt.verify(token, process.env.COMPANY_REFRESH_TOKEN_SECRET);
    }
}
export default CreatingToken;