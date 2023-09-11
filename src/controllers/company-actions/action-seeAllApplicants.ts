import { Request,Response } from "express";
import SeeApplicantsService from "../../services/seeApplicant.services";

class SeeApplicants{
    static seeAllApplicants = async(req: Request, res: Response) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const result = await SeeApplicantsService.seeAllApplicantsServices(token,req.body);
            if(result){
                res.status(200).json({messgae: "success", result});
            }else{
                res.status(400).json({message: 'Unable to fulfill req at the moment'});
            }
        } catch (error) {
            console.error('There is some error in see all applicants controller\n',error.message);
            res.status(500).json({message: "Internal Server Error"});
        }
    }
}
export default SeeApplicants;