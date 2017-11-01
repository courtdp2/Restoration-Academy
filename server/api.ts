import { Router } from 'express';
import adminsController from './controllers/admins.ctrl'
import staffController from './controllers/staff.ctrl'



const router = Router();

router
    .use('/admin', adminsController)
    .use('/about', staffController)



export default router;