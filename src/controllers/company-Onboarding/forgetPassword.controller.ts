import { Request,Response } from "express";
import ForgetPasswordService from "../../services/company-forgetPasswrd.services";

class ForgetPassword{
    static forgetPasswordController = async(req: Request, res: Response) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const result: any = ForgetPasswordService.forgetPasswordService(token,req.body);
            if(result){
                res.status(200).json({message: "success"});
            }else{
                res.status(400).json({message:"errors"});
            }
        } catch (error) {
            console.error('There are some error in forget password controller\n',error.message);
            res.status(500).json({message: "Intrnal Server Error"});
        }
    }
}
export default ForgetPassword;