Demo repo. Don't expect things to work.

This leverages [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to share code across targets

- `mobile/` - an expo app targeting iOS and Android
- `web/` - a nextjs 13 app targeting web
- `shared/` - shared logic between the target platforms

From the root run `yarn` then, in `web` or `mobile`, view their README to figure out how to run those.

Inspo:

- https://matthewwolfe.github.io/blog/code-sharing-react-and-react-native
