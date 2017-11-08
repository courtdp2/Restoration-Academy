import * as express from 'express';
import * as passport from 'passport';
import * as session from 'express-session';
let MySQLStore = require('express-mysql-session')(session);
import { Strategy as LocalStrategy } from 'passport-local';
import * as userProc from '../procedures/admins.proc';
import { pool } from './db';
import * as utils from '../utils';

export default function configurePassport(app: express.Express) {
    passport.use(new LocalStrategy({
        usernameField: 'email',    // means it will look for req.body.email in the /api/users/login request
        passwordField: 'password'  // means it will look for req.body.password in the /api/users/login request
    }, (email, password, done) => {
        userProc.readByEmail(email)
        .then((user) => {
            if (!user) {
                // If the user was not found (e.g. email doesn't match)
                return done(null, false, { message: 'Invalid login' });
            }
            // check 'password', which is the plaintext password they are trying to use,
            // against user.password, which is the hashed/salted value coming from the database.
            return utils.checkPassword(password, user.password)
            .then((matches) => {
                if (matches) {
                    delete user.password;
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid login' });
                }
            });
        }, (err) => {
            // There was some kind of error when talking to the db
            return done(err);
        });
    }));

    passport.serializeUser((user: models.IAdministration, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id: number, done) => {
        // In here, it's our job to take the id, and get the "full" user object
        userProc.read(id)
        .then((user) => {
            // No error encountered, sending Passport the user that came back from the db
            done(null, user);
        }, (err) => {
            // Error encountered. Tell passport we're done and send the error to it
            done(err);
        });
    });

    let sessionStore = new MySQLStore({
        createDatabaseTable: true
    }, pool);

    app.use(session({
        secret: 'random string!',
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());
}