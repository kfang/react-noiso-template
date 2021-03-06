# Getting Started
Requirements:

1. git
2. yarn

Running:

1. `yarn install`
2. `yarn start`
3. open a browser and go to [http://localhost:3001](localhost:3001)

Deployment:

1. `yarn build`
2. Take everything under `/dist` and put it on your preferred
webserver. Be smart, use CI.

# Why?
- Because sometimes, we don't need all the isomorphism complicated-ness...
- And not all of us run servers with node.js (_apache_ *cough *cough)
- Good starter if you just want to learn ReactJS
- Setting up projects is always a pain. Just clone and go.

# Extra Stuff
I know its supposed to be a __minimal__ setup but I feel that these extras
are so basic it needs to be part of the minimal template. If you don't want
them, take them out of package.json or don't use them.

- AJAX: Github Fetch https://github.com/github/fetch
- Router: React-Router https://github.com/reactjs/react-router

# Compatibility
sorry, fetch doesn't work with IE11 without a promise  polyfill. Since I'm trying
to keep everything to a minimum, I'm not including it. In the future, I might switch
to using [axios](https://www.npmjs.com/package/axios) instead.
