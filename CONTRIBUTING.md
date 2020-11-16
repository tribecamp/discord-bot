# Contributing

## Style Guide

This Tribecamp repository follows the **[Tribecamp Style Guide](https://github.com/tribecamp/eslint)**, which follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
We expect everyone to strictly follow this style guide.
Before you either push a commit or create a Pull Request, please check if there are no linter errors present. We recommend using Visual Studio Code (or [VSCodium](https://vscodium.com), if you're concerned about your privacy) with the ESLint plugin installed for automatic linting.

## Before committing

We have adopted **[Conventional Commits](https://www.conventionalcommits.org)** as a ruleset for commit messages. In short, commit messages *must* be formatted using one the following prefixes:

- `build` – for changes made to the build system
- `chore` – for changes that do not change production code
- `ci` – for changes made to Continuous Integration (CI) configuration
- `docs` – for updates made to the documentation
- `feat` – for newly introduced features
- `fix` – for bug fixes and patches
- `improvement` – for overall made improvements
- `perf` – for changes optimizing the overall performance
- `refactor` – for refactored code that does not change the public Discord bot
- `revert` – for when reverting back to a previous commit
- `style` – for code style changes (such as indentation)
- `test` – for when adding tests or assertions

Examples:

`feat: add ban command`

`refactor: remove unused var`

You may also specify a scope. We **strongly** encourage you to use scopes, because it's an excellent way of determining what part of the codebase has been changed.

Example:

`feat(ban): add ability to ban a specific member`

## Installation

### Requirements

- yarn (`npm install -g yarn`)
- NodeJS

In your shell of choice, run:

```bash
git clone https://github.com/tribecamp/discord-bot/ # clone the repo
yarn install # install all the dependencies
yarn compile # compile the source
yarn dev # start the developer environment
```

Move [`src/config/env.example`](./src/config/env.example) to the [root directory](./) and rename it to `.env`, and fill in your Discord bot token, which you can find [here](https://discord.com/developers/applications).

If you want to use hot reloading in `yarn dev`, you'll have to install the [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) extension on Visual Studio Code.

## Useful commands

The following commands might come in handy:

| Command                    | Description                                                                     |
|----------------------------|---------------------------------------------------------------------------------|
| `yarn dev`                 | Spins up the development environment.                                           |
| `yarn build`               | Builds all the necessary Docker images for prooduction.                         |
| `yarn compile`             | Compiles all package sources.                                                   |
| `yarn lint:fix`            | Runs ESLint & automatically fix linter errors **(do this frequently!)**         |
