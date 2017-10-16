var promise = require('./lib/ps_promise');
module.exports = (key) => {
     return promise(key);
}