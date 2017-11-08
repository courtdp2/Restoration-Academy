import { Router } from 'express';
import * as procedures from '../procedures/teachers.proc';

const router = Router();

//api/teachers
router.get('/', (req, res) => {
    return procedures.allTeachers()
    .then((teachers) => {
        res.send(teachers)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500);
    })
})

router.post('/',(req, res) => {
    return procedures.create(req.body.name, req.body.course, req.body.imageurl)
     .then(function(id){
         res.status(201).send(id);
     }).catch(function(err){
         console.log(err);
         res.sendStatus(500);
     });
 });

 // /api/teachers/12
 router.delete('/:id', (req, res) => {
    procedures.destroy(req.params.id)
    .then(() =>{
        res.sendStatus(204);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;