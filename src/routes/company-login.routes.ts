import express from 'express';
import CompanyLoginController from '../controllers/company-Onboarding/login.controller';
import BasicAuth from '../middlewares/basic-auth.middlewares';
const router = express();
router.post('/login',BasicAuth.authMiddleware,CompanyLoginController.loginController);
export default router;