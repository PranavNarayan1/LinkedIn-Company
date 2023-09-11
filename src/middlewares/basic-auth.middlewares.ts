import base64 from 'base-64';
import {Request, Response, NextFunction} from 'express';
import dotenv from'dotenv';
dotenv.config();

class BasicAuth{
    static authMiddleware = async(req: Request, res: Response, next: NextFunction) => {
        const [username, password] = await BasicAuth.decodeCredentials(req.headers.authorization || '');
        if(username == process.env.USERNAMES && password == process.env.PASSWORD){
            return next();
        }
        res.set('WWW-Authenticate', 'Basic realm="user_pages"');
        res.status(401).send('Basic authentication required.');
    }
    static decodeCredentials = async(authHeader: any) => {
        const encodedCredentials = authHeader.trim().replace(/Basic\s+/i,'');
        const decodedCredentials = base64.decode(encodedCredentials);
        return decodedCredentials.split(':');
    }
}
export default BasicAuth;