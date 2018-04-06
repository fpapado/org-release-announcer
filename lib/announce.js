async function announce(payload) {
  console.log(`
  Just released ${payload.release.tag_name} of ${payload.repository.full_name}!
  Find out more at ${payload.release.html_url}.
  `);
  return Promise.resolve({});
}

module.exports = announce;
