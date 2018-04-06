const announce = require('./announce');

module.exports = robot => {
  // Your code here
  robot.log('Yay, the app was loaded!');

  // TODO: consider release.published
  robot.on(['release.published'], async context => {
    robot.log.info('Release spotted');
    robot.log.debug({payload: context.payload});
    await announce(context.payload);
  });
};
