import express from 'express';
import TokenVerification from '../middlewares/JwtToken.middlewares';
import Logout from '../controllers/company-Onboarding/logout.controller';
const router = express();
router.patch('/logout',TokenVerification.accessTokenVerification,Logout.logout);
export default router;