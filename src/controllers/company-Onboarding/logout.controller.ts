import { Request,Response } from "express";
import LogoutServices from "../../services/company-logout.services";


class Logout{
    static logout = async(req: Request, res: Response) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const result = await LogoutServices.logoutService(token);
            if(result){
               res.status(200).json({message: "Company logged out successfully"}); 
            }
            else{
                res.status(400).json({Message: "Unable to logout"});
            }
        } catch (error) {
            console.error('There is an error in logout controller\n',error.message);
            res.status(500).json({message: "Internal server error"});
        }
    }
}
export default Logout;