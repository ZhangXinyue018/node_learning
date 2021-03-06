'use strict';

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerDocument = require('./swagger.json');

module.exports.runSwagger = async (app) => {

    const options = {
        swaggerDefinition: {
            info: {
                title: 'Express Learning API',
                version: '1.0.0',
                description: 'Test Express API with autogenerated swagger doc',
            },
        },
        apis: [
            './controllers/router.js'
        ],
    };
    const specs = swaggerJsdoc(options);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}