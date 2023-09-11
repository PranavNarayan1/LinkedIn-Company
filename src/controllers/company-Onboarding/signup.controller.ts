import { Request,Response } from "express";
import CompanySignupService from "../../services/company-signup.services";

class CompanySignupController{
    static signupController = async(req: Request, res: Response) => {
        try {
            const companyData = req.body;
            const result = CompanySignupService.signupService(companyData);
            if(!result){
                res.status(400).json({message: "unable to signup"});
            }else{
                res.status(200).json({message: "Company Registered Successfully"});
            }
        } catch (error) {
            console.error('There is some error in conpany Signup controller',error.message);
            res.status(500).json({message: "Internal server error"});
        }
    }
}
export default CompanySignupController