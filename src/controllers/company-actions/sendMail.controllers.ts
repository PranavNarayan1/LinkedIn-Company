import { Request,Response } from "express";
import SendingMail from "../../services/company-sendMail.services";

class SendMailController{
    static sendMailController = async(req: Request, res: Response) => {
        try {
            const payload = req.body;
            const result = await SendingMail.sendMailServices(payload);
            if(result){
               res.status(200).json({message: "mail sended successfully"}); 
            }else{
                res.status(400).json({message: "some error occured"});
            }
        } catch (error) {
            console.error('There is some error in send mail Controller\n',error.message);
            res.status(500).json({message: "Internal Server Error"});
        }
    }
}
export default SendMailController;