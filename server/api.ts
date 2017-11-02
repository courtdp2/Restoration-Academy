import { Router } from 'express';
import adminsController from './controllers/admins.ctrl'
import aboutController from './controllers/about.ctrl'



const router = Router();

router
    .use('/admin', adminsController)
    .use('/about', aboutController)



export default router;