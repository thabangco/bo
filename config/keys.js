if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
}
if (process.env.NODE_ENV === 'staging') {
  module.exports = require('./keys_stag');
}
if (process.env.NODE_ENV === 'development') {
  module.exports = require('./keys_dev');
} else {
  module.exports = require('./keys_loca');
}

