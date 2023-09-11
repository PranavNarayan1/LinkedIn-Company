import express from 'express';
import TokenVerification from '../middlewares/JwtToken.middlewares';
import ForgetPassword from '../controllers/company-Onboarding/forgetPassword.controller';
const router = express();
router.post('/forget_password',TokenVerification.accessTokenVerification,ForgetPassword.forgetPasswordController);
export default router;