import { Request,Response } from "express";
import CompanyLoginService from "../../services/company-login.services";

class CompanyLoginController{
    static loginController = async(req: Request, res: Response) => {
        try {
            const result = await CompanyLoginService.loginService(req.body);  
            const accessToken = result.accessToken.token;
            const refreshToken = result.accessToken.token;
            const resultToSend = {accessToken,refreshToken}; 
            if(result){
                res.status(200).json({message: "You are logged in as organization\n",resultToSend});
            }else{
                res.status(400).json({message:"you are not registered with us"});
            }
        } catch (error) {
            console.error('There is an error in company login controller\n',error.message);
            res.status(500).json({message: "Internal server error"});
        }
    }
}
export default CompanyLoginController;