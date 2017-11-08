import { Router } from 'express';
import adminsController from './controllers/admins.ctrl'
import aboutController from './controllers/about.ctrl'
import teachersController from './controllers/teachers.ctrl'



const router = Router();

router
    .use('/admins', adminsController)
    // /api/admins
    .use('/about', aboutController)
    .use('/teachers', teachersController)



export default router;