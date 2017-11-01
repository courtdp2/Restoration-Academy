import { Router } from 'express';
import { getTeachers } from '../procedures/staff.proc'

const router = Router();

router.get('/elementary', (req, res) => {
    getTeachers('elementary')
        .then((teachers) => {
            res.send(teachers)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(500);
        })

})
router.get('/highschool', (req, res) => {
    getTeachers('junior and high school')
        .then((teachers) => {
            res.send(teachers)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(500);
        })
})


export default router;