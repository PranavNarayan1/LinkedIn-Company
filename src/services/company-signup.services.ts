import { CompanyModel } from "../models/company.model";
import HashingOfPassword from "../utils/password-hashing";


class CompanySignupService{
    static signupService = async(companyData: any) => {
        try {
            console.log(companyData);
            const check = await CompanyModel.findOne({official_email:companyData.official_email});
            if(check){
                return false;
            }
            const hashedPassword = await HashingOfPassword.createPasswordHash(companyData.password);
            await CompanyModel.create({name:companyData.name,password:hashedPassword,official_email:companyData.official_email});
            return true;
        } catch (error) {
            console.error('There is an error in Company Signup services\n',error.message);
            return false;
        }
    }
}
export default CompanySignupService;