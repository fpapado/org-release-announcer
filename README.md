# org-release-announcer

A GitHub App built with [probot](https://github.com/probot/probot) that announces releases where it is installed.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.

## Testing
Currently, `robot.receive` seems to break with our fixtures; you can verify things work with:

```sh
npm run simulate:release
```
