const config = require('../config.json') //relative pathing used

exports.get = (key) => process.env[key] || config[key]