# Simple Blog App

It's a simple single page SSR enabled Blog Application with Mock Data

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you how to get a development env running

```
Clone this repo https://github.com/prince3339/simple-blog.git
Install yarn (if you haven't yet): https://yarnpkg.com/lang/en/docs/install/#windows-stable [Recommended. It'll work with npm without this though]
Create a .env file inside the root folder. Copy and paste the following line in .env file (It's basically a environment settings file. To run locally you can ignore it).
`NODE_ENV="development"` 

$ yarn/npm install (To install all dependencies)
$ yarn dev/ npm run dev [It'll run the app at localhost:3000 in development mode]

For production build

$ yarn build/ npm run build
$ yarn preview/ npm run preview [It'll run the app at localhost:3000 in production mode]

```

### Core technologies used in this project

```
1. ReactJS
2. Nextjs (For Server side rendering support)
3. styled-components (An awesome library to style app with lots off cool feature. It also supports sass. https://www.styled-components.com/)
4. And ofcourse HTML, CSS, SASS
5. Couple of npm modules to support some utilities
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
 
 Here I have used 3 steps to render a page. 
 1. Components: No data logic here. It accepts data and render.
 2. Containers: Fetching data and other logical parts are here.
 3. Pages: Finally we import containers here to render a page with routing
 
```
