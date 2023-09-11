import { Request,Response } from "express";
import SelectCandidateServices from "../../services/comapny-selectCandidate.services";

class SelectCandidate{
    static selectCandidateController = async(req: Request, res: Response) => {
        try {
            const payload = req.body;
            const result = await SelectCandidateServices.selectCandidateService(payload);
            if(result){
                res.status(201).json({message: 'candidate selected successfully'});
            }else{
                res.status(400).json({message: 'error in selectiong candidate at the moment'});
            }
        } catch (error) {
            console.error('There is some error in select candidate controller\n',error.message);
            res.status(500).json({message: "Internal Server Error"});
        }
    }
}
export default SelectCandidate;