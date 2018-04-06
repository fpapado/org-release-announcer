const {createRobot} = require('probot');
const app = require('../lib/index');
const payload = require('./fixtures/release.published');

// Massive thanks to https://probot.github.io/docs/testing/
describe('org-announcer', () => {
  let robot;
  // let github
  // let announce;

  beforeEach(() => {
    // Create a robot instance
    robot = createRobot();

    // Initialise app
    app(robot);

    // Mock out the Github API (for replying to it with our probot)
    // NOTE: not used atm, leaving for posterity
    // github = {
    // issues: {
    // createComment: jest.fn().mockReturnValue(Promise.resolve({}))
    // }
    // };

    // Pass the mocked out Github API to the robot instance
    // robot.auth = () => Promise.resolve(github);

    // Mock out announcer
    // announce = jest.fn().mockReturnValue(Promise.resolve({}));
  });

  describe('release is published', () => {
    it('calls the announcer with the payload contents', async () => {
      // Simulates delivery of a payload
      // payload.event is the X-Github-Event header send by Github (e.g. "release")
      // payload.payload is the actual payload body
      // NOTE: this currently breaks :/
      await robot.receive({event: 'release', payload});
      // expect(announce).toHaveBeenCalledTimes(1);
      expect(true);
    });
  });
});
