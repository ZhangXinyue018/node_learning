'use strict';

const jwt = require('jsonwebtoken');
const jwtexpress = require("express-jwt");

const getTokenFromHeaders = (req) => {
    const { headers: { authorization } } = req;

    if (authorization && authorization.split(" ")[0] === "Token") {
        return authorization.split(" ")[1];
    }
    return null;
};
class AuthManager {
    constructor(globalToken, superToken = "", enableSuperToken = false) {
        this.globalToken = globalToken;
        this.superToken = superToken;
        this.enableSuperToken = enableSuperToken;
    }

    checkUser(userId, userPassword) {
        return (userId === "admin") ?
            {
                userId: userId,
                userRole: "admin"
            } : {
                userId: userId,
                userRole: "guest"
            };
    }

    produceJWTToken(userId, userRole) {
        return jwt.sign({
            userId: userId,
            userRole: userRole
        }, this.globalToken);
    }

    verifyAuth(requiredRole) {
        return (req, res, next) => {
            if (!requiredRole) {
                return next()
            }
            if (this.enableSuperToken && getTokenFromHeaders(req) === this.superToken) {
                return next();
            }

            jwtexpress({
                secret: this.globalToken,
                userProperty: "user",
                getToken: getTokenFromHeaders,
            })(req, res, function (err) {
                if (err) {
                    return res.status(err.status).json({
                        "message": err.message
                    });
                }
                console.log(req.user);
                if (req.user.userRole && req.user.userRole === requiredRole) {
                    return next();
                } else {
                    return res.status(401).json({
                        "message": "token is invalid"
                    });
                }
            });
        }
    }
}

module.exports = new AuthManager("12345");