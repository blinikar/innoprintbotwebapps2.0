# Atomic React Starter
A simple React project starter optimized to work in WebStorm

## Features:
- Blazing-fast hot-reload
- Typescript support
- Linter specially configured for my code and structure style
- Testing bootstrapped
- On-commit linting and testing
- Router included

## Possible problems
### IDE imports modules relative to project root, not `src` folder
In WebStorm settings, go to `Editor` -> `Code Style` -> `Typescript` -> `Import`, check `Use paths relative to tsconfig.json`

## Technologies list:
- `Vite`
- `Vitest`
- `ESLint`
- `React Testing Library`
- `SASS`
- `React Router`
- `OpenColor Palette`


## TODO features
- Zip with WebStorm template settings
- Mutation testing? (`Stryker`)
- One-command `Mantine` and `Tabler Icon` installation
- Reference files with a script to remove them all
- Add on-commit hooks with `Husky`
- Add components and pages templating with `plop`