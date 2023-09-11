import express from 'express';
import TokenVerification from '../middlewares/JwtToken.middlewares';
import SeeApplicants from '../controllers/company-actions/action-seeAllApplicants';
const router = express();
router.post('/see_all_applicants',TokenVerification.accessTokenVerification,SeeApplicants.seeAllApplicants);
export default router;