# Contributing

Thanks for being interested in contributing to this project!

## Development

### Setup

Clone this repo to your local machine and install the dependencies.

```bash
pnpm install
```

### Publishing

1. Bump the `version` in `package.json`.
2. Push the changes to the `main` branch.
3. Create a new tag with according to the `version`.
4. Push the tag to the `main` branch.
5. Create a new release on GitHub with the tag.
6. The `publish-to-npm.yml` workflow will automatically publish the package to npm.

## Project Structure

This repository is initialized with the [vue-ts template](https://vite.new/vue-ts) of [vite](https://vitejs.dev/).

```
playground/     - the playground for debugging the component
src/            - the component
```

## Code Style

Use `pnpm run lint --fix` to detect code style issues and fix the issues before committing.

## Thanks

Thank you again for being interested in this project! You are awesome!
