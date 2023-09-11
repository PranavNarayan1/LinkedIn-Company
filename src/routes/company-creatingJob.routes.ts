import express from 'express';
import TokenVerification from '../middlewares/JwtToken.middlewares';
import CreatingJob from '../controllers/company-actions/action-createJob.controllers';
const router = express();
router.post('/create_jobs',TokenVerification.accessTokenVerification,CreatingJob.createJobsController);
export default router;