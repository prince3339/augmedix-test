# Simple Blog App

It's a simple single page SSR enabled Blog Application with Mock Data

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you how to get a development env running

```
Clone this repo https://github.com/prince3339/simple-blog.git

$ yarn/npm install (To install all dependencies)
$ yarn dev/ npm run dev [It'll run the app at localhost:3000 in development mode]

For production build

$ yarn build/ npm run build
$ yarn preview/ npm run preview [It'll run the app at localhost:3000 in production mode]
```

### Overview of Project Structure

```
 simple-blog
 | -components
 |  | -All reusable components
 | - containers
 |  | -Data Layer (Container Components. Fetch & pass data to component)
 | - pages
 |  | - Routed pages
 | - static
 |  | - Static resources (Ex: image)
 | - style
 |  | - css/sass styles are here (base/global styles)
 | - utils
 |  | - helpers/settings (colorMap, Breakpoint, typography...)
 | -.babelrc.js (babel config)
 | -.eslintrc.js (eslint config file for IDE linting support)
 | -.gitignore
 | -next.config.js (NextJs config file)
 | -nodemon.json
 | -package.json (Dependency map)
 | -routes.js (Necessary routes are here)
 | -server.js (Project Server file)
```
