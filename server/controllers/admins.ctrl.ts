import { Router } from 'express';
import * as passport from 'passport';
import * as procedures from '../procedures/admins.proc';
import * as utils from '../utils';
import * as auth from '../middleware/auth.mw'

const router = Router();

router.get('/hash/:pw', (req, res) => {
    utils.encryptPassword(req.params.pw)
    .then((hash) => {
        res.send(hash);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

// /api/admins/
router.get('/', (req, res) => {
    return procedures.all()
    .then((teachers) => {
        res.send(teachers)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500);
    })
})

// router.post('/', (req, res)=> {
//     procedures.create(req.body.name, req.body.email,req.body.role, req.body.imageurl)
//     .then((response) => {
//         res.send(response);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     })
// }




// /api/admins/:id


// /api/admins/login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err: any, admin: models.IAdministration, info: any) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if (!admin) { // if user is undefined (falsey), there is no valid login
            return res.status(401).send(info);
        }
        // At this point, we must have a valid login
        req.logIn(admin, (err) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            } else {
                delete admin.password;
                return res.send(admin);
            }
        });
    })(req, res, next);
});

//router.all('*', auth.isLoggedIn);

router.get('/', (req, res) => {
    procedures.all()
    .then((admins) => {
        res.send(admins);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

 
// router.post('/', (req, res) => {
//     utils.encryptPassword(req.body.password)
//     .then((hash) => {
//         return procedures.create(req.body.name, hash, req.body.course, req.body.school);
//     }).then((id) => {
//         res.send(id);
//     }).catch((e) => {
//         console.log(e);
//         res.sendStatus(500);
//     });
// });
router.get('/me', (req, res) => {
    res.send(req.user);
});
router.get('/logout', (req, res) => { // actually /api/admin/logout
    if (req.session) {
        req.session.destroy(() => {
            req.logOut();
            res.sendStatus(204);
        });
    }
});

export default router;

