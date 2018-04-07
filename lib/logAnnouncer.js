/** Prepare a status based on the release event
 * @see https://developer.github.com/v3/activity/events/types/#releaseevent
 *  for the data available
 */
const makeStatus = event =>
  `Just released ${event.release.tag_name} of ${event.repository.full_name}!
Find out more at ${event.release.html_url}.`;

async function announce(event) {
  console.log(makeStatus(event));
  return Promise.resolve({});
}

module.exports = {announce};
