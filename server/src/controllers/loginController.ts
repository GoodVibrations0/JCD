import { Request, Response } from 'express';
import { loginService } from '../services/authService';

export const loginController = async (req: Request, res: Response): Promise<void> => {
    const { email, passwordPlaintext } = req.body;

    try {
        const token = await loginService(email, passwordPlaintext); // checks email exists and password is correct, if so sends jwt
        res.status(200).json({ message: 'Login success', token }); // Response is sent to frontend here
        // No need for `return`, unless you have more code below that you want to skip
    } catch (error: any) {
        if (error.message === 'Invalid credentials') {
            res.status(401).json({ error: 'Incorrect credentials' }); // Sent immediately
        } else {
            console.error('Login error', error.message);
            res.status(500).json({ error: 'Server error' }); // Sent immediately
        }
    }
};