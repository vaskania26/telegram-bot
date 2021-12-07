const logger = require('pino')({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: true,
    },
  },
});

module.exports = logger;
