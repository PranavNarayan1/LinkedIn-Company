import express from 'express';
import dotenv from 'dotenv';
import { databaseConnection } from './src/databases/connection';
import { connectRedis } from './src/databases/redis'
import signUp from './src/routes/company-signup.routes';
import login from './src/routes/company-login.routes';
import logout from './src/routes/company-logout.routes';
import create_jobs from './src/routes/company-creatingJob.routes';
import see_all_applicants from './src/routes/seeAllApplicants.routes';
import forget_password from './src/routes/forget-password.routes';
import send_mail_to_selected_candidates from './src/routes/sendMail.routes';
import select_candidate from './src/routes/company-selectCandidate.routes';
import swaggerUi from 'swagger-ui-express'

const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;
databaseConnection();
connectRedis();

// company onBoarding routes
app.use('/company',signUp);
app.use('/company',login);
app.use('/company',logout);
app.use('/comapny',forget_password);

//company action routes
app.use('/company-action',create_jobs);
app.use('/company-action',see_all_applicants);
app.use('/company-action',select_candidate);
app.use('/compay-action',send_mail_to_selected_candidates);

const swaggerDocument = require("./swagger_output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
})