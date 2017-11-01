import { Router } from 'express';
import * as procedures from '../procedures/about.proc'

const router = Router();

router.get('/elementaryteachers', (req, res) => {
    procedures.getTeachers('elementary')
        .then((teachers) => {
            res.send(teachers)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(500);
        })

})
router.get('/highschoolteachers', (req, res) => {
    procedures.getTeachers('junior and high school')
        .then((teachers) => {
            res.send(teachers)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(500);
        })
})

router.get('/board-of-directors', (req, res) => {
    procedures.getBoard()
    .then((members) => {
        res.send(members)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500);
    })
})

export default router;