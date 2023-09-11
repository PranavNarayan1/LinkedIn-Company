import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

class MailGeneration{
    static transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MY_MAIL,
            pass:process.env.MY_PASSWORD
        },
        debug: true
    })

    static comapnyAcknowledgeMailGeneration = async(email: string) => {
        const mailSubject = 'CONGRATULATIONS ON SELECTION';
        const mailText = 'Thank You for showing intrest in our organisation. We are very glad to inform you that you are selected for the interview and we will send you interview link shortly.\n\nTill then have patience and stay tuned.';
        await MailGeneration.sendMail(email,mailSubject,mailText);
        return true;
    }

    static userForgetPasswordMailGeneration = async(email: string, otp: number) => {
        const mailSubject = 'OTP VERIFICATION';
        const mailText = `Your OTP for reset password is ${otp} and is valid for only for 5 minutes`;
        await MailGeneration.sendMail(email,mailSubject,mailText);
        return true;
    }
    
    
    static sendMail = async(to: string, subject: string, text: string) => {
        try {
            
            await MailGeneration.transporter.sendMail({
                from: process.env.MY_MAIL,
                to,
                subject,
                text
            });
            console.log('mail send successfully');
        } catch (error) {
            console.log("error in sending mail", error);
        }
    }
}
export default MailGeneration;