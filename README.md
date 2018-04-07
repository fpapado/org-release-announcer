# org-release-announcer

A GitHub App built with [probot](https://github.com/probot/probot) that announces releases where it is installed.
This is both a library and a template application.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Organisation
The library lives under `lib/index.js`.
It allows you to plug in "announcers" of the form:
```js
{
  announce: function(event)
}
```
Those can be anything from logging to the console, saving to a log, [posting to Twitter](https://github.com/fpapado/org-release-announcer-twitter), and anything you come up with.
The root `index.js` is a sample app that links together a console.log announcer and the app.

## How do I run this?
Self-hosting would be my recommendation; I certainly don't want access to your data, and you likely have specific requirements for how to announce things :)

1) Fork/Clone/Copy this repository:
```shell
git clone https://github.com/fpapado/org-release-announcer.git
```
[Degit is a good tool for this](https://github.com/Rich-Harris/degit)

2) Make any customisations you want to `index.js`, such as adding a functional announcer.

3) Copy `.env.example` to `.env`. Use those files as reference whenever `.env` and API Keys are mentioned in the docs below.

4) See [Probot's docs](https://probot.github.io/docs/deployment/#create-the-github-app) about the permissions and specifics of setting up the  Github App.
This app requires these **Permissions & events** for the GitHub App:

- Repository contents - **Read-only**
- Repository metadata - **Read-only**
  - [x] Check the box for **Release** events

5) See [Probot's docs for deployment](https://probot.github.io/docs/deployment/#deploy-the-app) for deployment options.

If you end up with something that can be shared (e.g. a specific announcer), I would be eager to know about it.

## Testing
Run the tests with npm:

```sh
npm test
```

You can also simulate a release event from the fixtures. By default, it prints the announcement to the console:

```sh
npm run simulate:release
```

## Thanks and Inspiration
Credits to the Glitch starter templates:

For Probot:
https://glitch.com/~probot-hello-world
