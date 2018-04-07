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
git clone https://fpapado/org-release-announcer
```
2) Make any customisations you want to `index.js`, such as adding a functional announcer.

3) See [docs/deploy.md](docs/deploy.md) about the permissions and specifics of setting up the  Github App.

If you end up with something that can be shared (e.g. a specific announcer), I would be eager to know about it.

## Testing
Currently, `robot.receive` seems to break with our fixtures; you can verify things work with:

```sh
npm run simulate:release
```
