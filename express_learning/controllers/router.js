'use strict';

const version_controller = require('./versionController');
const user_controller = require('./userController');
const auth_controller = require('./authController');
const logger = require('../common/logger').logger;
const errorHandler = require('../common/errorHandler').errorHandler;
const express = require('express');

async function createUserApi(app) {
    app.use(express.json());
    app.use(express.urlencoded());
    /**
     * @swagger
     * /user/issue:
     *   post:
     *     summary: issue auth
     *     description: issue auth
     *     tags: [user]
     *     parameters: [
     *     {
     *       in: "body",
     *       name: "body",
     *       description: "User to authenticate",
     *       required: true
     *     }
     *   ]
     *     responses:
     *       200:
     *         description: issue auth
     */
    app.post('/user/issue', auth_controller.issueAuth);

    /**
    * @swagger
    * tags:
    *   name: version
    * /user:
    *   get: 
    *     summary: get user
    *     description: This returns one user
    *     tags: [user]
    *     responses:
    *       200:
    *         description: one user
    */
    // app.get('/user', auth_controller.checkAuth(1));
    // app.get('/user', auth_controller.verifyUser("admin"),
    //     user_controller.getUser);
    app.get('/user', (req, resp, next) => { req.requestId = 13; return next(); }, user_controller.getUser);

    /**
    * @swagger
    * /users:
    *   get:
    *     summary: get all users
    *     description: This should return all users
    *     tags: [user]
    *     responses:
    *       200:
    *         description: return all users
    */
    app.get('/users', user_controller.getAllUser);

    /**
     * @swagger
     * /user:
     *   post:
     *     summary: update a user
     *     description: Update a user
     *     tags: [user]
     *     responses:
     *        200:
     *          description: return update result
     */
    app.post('/user', user_controller.updateUser);
}

async function createVersionApi(app) {
    /**
    * @swagger
    * tags:
    *   name: version
    * /version:
    *   get:
    *     summary: get version
    *     description: version
    *     tags: [version]
    *     responses:
    *       200:
    *         description: return current version
    */
    app.get('/version', version_controller.getVersion);
    app.get('/finalizeVersion', version_controller.finalizeVersion)
    app.get('/test', version_controller.asyncTest);
}

module.exports.createApis = async (app) => {
    app.use((req, resp, next) => {
        logger.debug('req from url: ' + req.url);
        next();
    });

    await Promise.all([
        createUserApi(app),
        createVersionApi(app)
    ]);

    app.use(errorHandler);
};