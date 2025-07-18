import { Router, RequestHandler } from 'express';
import { loginController } from '../controllers/loginController';

const router = Router();

// POST /auth/login
router.post('/login', loginController as RequestHandler);   // login controller has (req,res)

export default router;