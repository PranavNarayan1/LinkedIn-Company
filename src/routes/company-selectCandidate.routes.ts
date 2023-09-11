import express from 'express';
import TokenVerification from '../middlewares/JwtToken.middlewares';
import SelectCandidate from '../controllers/company-actions/action-selectCandidate.controllers';
const router = express();
router.post('/select_candidate',TokenVerification.accessTokenVerification,SelectCandidate.selectCandidateController);
export default router;