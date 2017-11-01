import { Router } from 'express';
import adminsController from './controllers/admins.ctrl'



const router = Router();

router
    .use('/admin', adminsController);



export default router;