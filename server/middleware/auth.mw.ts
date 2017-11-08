import { Request, Response, NextFunction } from 'express';
export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
        // If they are logged in, let the request through to the next route handler/method
        next();
    } else {
        res.sendStatus(401);
    }
}
export function isAdmin(req: Request, res: Response, next: NextFunction) {
    if (req.user.role === 'admin') {
        // If they are an admin, let the request through to the next route handler/method
        next();
    } else {
        res.sendStatus(403);
    }
}