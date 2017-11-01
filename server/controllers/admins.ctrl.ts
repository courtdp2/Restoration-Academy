import { Router } from 'express';
import * as passport from 'passport';
import * as procedures from '../procedures/admins.proc';
import * as utils from '../utils';
import * as auth from '../middleware/auth.mw'

const router = Router();


// router.post('/login', (req, res, next) => {
//     passport.authenticate('local', (err: any, user: models.IAdministration, info: any) => {
//         if (err) {
//             console.log(err);
//             return res.sendStatus(500);
//         }
//         if (!user) { // if user is undefined (falsey), there is no valid login
//             return res.status(401).send(info);
//         }
//         // At this point, we must have a valid login
//         req.logIn(user, (err) => {
//             if (err) {
//                 console.log(err);
//                 return res.sendStatus(500);
//             } else {
//                 delete user.password;
//                 return res.send(user);
//             }
//         });
//     })(req, res, next);
// });
// router.all('*', auth.isLoggedIn);
// router.get('/', (req, res) => {
//     procedures.all()
//     .then((admins) => {
//         res.send(admins);
//     }).catch((e) => {
//         console.log(e);
//         res.sendStatus(500);
//     });
// });
// // router.post('/', (req, res) => {
// //     utils.encryptPassword(req.body.password)
// //     .then((hash) => {
// //         return procedures.create(req.body.name, hash, req.body.firstname, req.body.lastname);
// //     }).then((id) => {
// //         res.send(id);
// //     }).catch((e) => {
// //         console.log(e);
// //         res.sendStatus(500);
// //     });
// // });
// router.get('/me', (req, res) => {
//     res.send(req.user);
// });
// router.get('/logout', (req, res) => { // actually /api/users/logout
//     if (req.session) {
//         req.session.destroy(() => {
//             req.logOut();
//             res.sendStatus(204);
//         });
//     }
// });
router.post('/',(req, res) => {
   return procedures.create(req.body.name, req.body.course, req.body.imageurl)
    .then(function(id){
        res.status(201).send(id);
    }).catch(function(err){
        console.log(err);
        res.sendStatus(500);
    });
});
export default router;