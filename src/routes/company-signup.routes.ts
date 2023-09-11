import express from 'express';
import Validations from '../middlewares/validations.middlewares';
import CompanySignupController from '../controllers/company-Onboarding/signup.controller';
import BasicAuth from '../middlewares/basic-auth.middlewares';

const router = express();
router.post('/signUp',BasicAuth.authMiddleware,Validations.companyValidations,CompanySignupController.signupController);
export default router;