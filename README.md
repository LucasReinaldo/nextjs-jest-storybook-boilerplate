This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) template Typescript.

## 👨‍💻 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## 🤔 Benefits of using ESLint and Prettier

If you have set up Prettier, you can configure it to format your file on saving it. That way, you never need to worry about your code formatting anymore. Since Prettier is highly opinionated, you can do only minor configurations.

## 🚀 Technologies

The project was mainly developed with the following technologies:

```
"dependencies": {
  "next": "11.0.1",
  "next-pwa": "^5.2.22",
  "react": "17.0.2",
  "react-dom": "17.0.2",
  "styled-components": "^5.3.0"
},
"devDependencies": {
  "@babel/core": "^7.14.6",
  "@babel/preset-typescript": "^7.14.5",
  "@storybook/addon-actions": "^6.3.2",
  "@storybook/addon-essentials": "^6.3.2",
  "@storybook/addon-links": "^6.3.2",
  "@storybook/react": "^6.3.2",
  "@testing-library/jest-dom": "^5.14.1",
  "@testing-library/react": "^12.0.0",
  "@testing-library/user-event": "^13.1.9",
  "@types/jest": "^26.0.23",
  "@types/node": "^16.0.0",
  "@types/react": "^17.0.13",
  "@types/styled-components": "^5.1.11",
  "@typescript-eslint/eslint-plugin": "^4.28.1",
  "@typescript-eslint/parser": "^4.28.1",
  "babel-loader": "^8.2.2",
  "babel-plugin-styled-components": "^1.13.1",
  "eslint": "^7.29.0",
  "eslint-config-next": "^11.0.1",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-prettier": "^3.4.0",
  "eslint-plugin-react": "^7.24.0",
  "eslint-plugin-react-hooks": "^4.2.0",
  "husky": "^7.0.0",
  "jest": "^27.0.6",
  "jest-styled-components": "^7.0.4",
  "lint-staged": "^11.0.0",
  "plop": "^2.7.4",
  "prettier": "^2.3.2",
  "typescript": "^4.3.5"
}

VS Code with EditorConfig and ESLint
```
## 📝 Scripts

```
"scripts": {
  "dev": "next dev",
  "build": "NODE_ENV=production next build",
  "start": "next start",
  "lint": "eslint src",
  "test": "jest",
  "test:watch": "yarn test --watch",
  "storybook": "start-storybook -s ./public -p 6006",
  "build-storybook": "build-storybook -s ./public",
  "plop:generate": "yarn plop --plopfile ./generators/plopfile.js"
},
```

- dev: runs your application on localhost:3000
- build: creates the production build version
- start: starts a simple server with the build production code
- lint: runs the linter in all components and pages
- test: runs jest to test all components and pages
- test:watch: runs jest in watch mode
- storybook: runs storybook on localhost:6006
- build-storybook: create the build version of storybook
- plop:generate: creates a new set of component, test, storybook and styles

## 🧩 You will need

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

## 📚 Creating a repository from a template

- On GitHub, navigate to the main page of the repository.
- Above the file list, click Use this template.
- Use the Owner drop-down menu, and select the account you want to own the repository.
- Type a name for your repository, and an optional description.
- Choose a repository visibility.

## 📚 How to clone and use

To clone and run this application, we will need NodeJS + Yarn (or NPM) installed on computer.

After this clone the repository, from our command line:

```
# Clone this repository
$ git clone https://github.com/LucasReinaldo/nextjs-jest-storybook-boilerplate.git

# Go into the repository
$ cd nextjs-jest-storybook-boilerplate

# Install dependencies
$ yarn install

# Run the app
$ yarn dev
```

## 🧠 Need an upgrade?

Check it out: [Yarn Upgrade](https://classic.yarnpkg.com/en/docs/cli/upgrade/).

Upgrades packages to their latest version based on the specified range.

```
$ yarn upgrade
```

## 👋 References

- Willian Justen: https://github.com/willianjusten
- React Avançado: https://reactavancado.com.br/

## 📖 License

This project is under MIT license [LICENSE](LICENSE.md) to know more.
