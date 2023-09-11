import Joi from "joi";
import { Request,Response,NextFunction } from "express";

class Validations{
  static async companyValidations(req: Request, res: Response, next: NextFunction){
        try {
            const companySchema = Joi.object({
                name: Joi.string().required(),
                official_email:Joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).required(),
                password:Joi.string().min(8).required(),
                location: Joi.string().optional(),
                about:Joi.string().optional(),
                total_employee:Joi.string().optional(),
                profile_picture: Joi.string().optional()
            });
            const result = companySchema.validate(req.body);
            if(result.error){
                console.log(result.error);
                res.status(400).json(result.error.message);
            }else{
                next();
            }
        } catch (error) {
            console.error('There is some error in the company validation middlewares\n', error.message);
            res.status(500).json({message:"Internal Server Error"});
        }
    }
}
export default Validations;