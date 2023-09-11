import express from 'express';
import TokenVerification from '../middlewares/JwtToken.middlewares';
import SendMailController from '../controllers/company-actions/sendMail.controllers';
const router = express();
router.post('/send_mail_to_selected_candidates',TokenVerification.accessTokenVerification,SendMailController.sendMailController);
export default router;