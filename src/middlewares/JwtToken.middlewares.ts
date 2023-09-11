import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { UserSession } from "../models/sessions.model";
import dotenv from 'dotenv';
import { TokenModel } from "../models/tokens.model";
dotenv.config();

class TokenVerification{
    static accessTokenVerification = async(req: Request,res: Response,next: NextFunction) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode: any = jwt.verify(token,process.env.COMPANY_ACCESS_TOKEN_SECRET);
            const result: any = await UserSession.findOne({user_id:decode.id});
            if(!result){
                res.status(400).json({message: "Unable to process request"});
            }
            const tokenDetails = await TokenModel.findOne({user_id:decode.id});
            if(tokenDetails.access_token_id == decode.jti){
                next();
            }else{
                res.status(400).json({message:"Unable to process request"});
            }
        } catch (error) {
            console.error('There is some error in access token verification middleware\n',error.message);
            res.status(500).json({message: "Internal server error"});
        }
    }

    static refreshTokenVerification = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode: any = jwt.verify(token,process.env.COMPANY_REFRESH_TOKEN_SECRET);
            const result: any = await UserSession.findOne({user_id:decode.id});
            if(!result){
                res.status(400).json({message: "Unable to process request"});
            }
            const tokenDetails = await TokenModel.findOne({user_id:decode.id});
            if(tokenDetails.refresh_token_id == decode.jwtid){
                next();
            }else{
                res.status(400).json({message:"Unable to process request"});
            }
        } catch (error) {
            console.error('There is some error in refresh token verification middleware\n',error.message);
            res.status(500).json({message: "Internal Server Error"});
        }
    }
}
export default TokenVerification;