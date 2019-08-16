'use strict';

const winston = require('winston');
const container = new winston.Container();

const fluentdConfig = {
    host: 'localhost',
    port: 24224,
    timeout: 3.0,
    requireAckResponse: true // Add this option to wait response from Fluentd certainly,
};
const fluentTransport = require('fluent-logger').support.winstonTransport();
var fluentdDrivedTransport = new fluentTransport(`mylog`, fluentdConfig);


container.add("container_logger", {
    level: 'debug',
    format: winston.format.combine(
        winston.format.label({ label: "container_logger" }),
        winston.format.json()
    ),
    defaultMeta: { service: 'express_learning' },
    transports: [
        new winston.transports.File({
            filename: "API_access.log",
            format: winston.format.combine(
                winston.format.splat(),
                winston.format.timestamp(),
                winston.format.simple(),
                winston.format.printf(
                    info => `[${info.label}][${info.level}][${info.timestamp}]: ${JSON.stringify(info.message)}`
                )
            )
        }),
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.splat(),
                winston.format.timestamp(),
                winston.format.simple(),
                winston.format.printf(
                    info => `[${info.label}][${info.level}][${info.timestamp}]: ${JSON.stringify(info.message)}`
                )
            )
        }),
        // fluentdDrivedTransport
    ]
});


exports.logger = container.get("container_logger");
