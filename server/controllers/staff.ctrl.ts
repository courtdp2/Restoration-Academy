import { Router } from 'express';
import * as procedures from '../procedures/staff.proc'

const router = Router();

router.get('/', (req, res) => {
    procedures.ElementaryTeachers('elementary')
    .then((teachers) => {
        res.send(teachers)
    }).catch((err) =>{
        console.log(err)
        res.sendStatus(500);
    })
   
}) 
router.get('/', (req, res) => {
  procedures.JrAndHighschoolTeachers('Junior and High School')
    .then((teachers) => {
        res.send(teachers)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500);
    })  
})


export default router;