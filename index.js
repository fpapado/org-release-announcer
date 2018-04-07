const logAnnouncer = require('./lib/logAnnouncer');
const makeRobot = require('./lib/index');

// App preconfigured with a log announcer
// You would want to use lib/index as a library instead :)
module.exports = makeRobot(logAnnouncer);
