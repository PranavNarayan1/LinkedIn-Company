import { Request,Response } from "express";
import CreatingJobServices from "../../services/company-createJobs.services";

class CreatingJob{
    static createJobsController = async(req: Request,res: Response) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            console.log(token);
            const result = await CreatingJobServices.createJobsService(token, req.body);
            if(result){
                res.status(200).json({message: "job created successfully"});
            }else{
                res.status(400).json({message: "Eroor in creating new job"});
            }
        } catch (error) {
            console.error('There is some error in create Jobs Controller\n',error.message);
            res.status(500).json({message: "internal server error"});
        }
    }
}
export default CreatingJob;