# Stuff You'll need
1. git (to clone the repo)
2. npm (to get the dependencies)
3. webpack (to package everything together)

# Getting Started
1. `npm install`
2. `npm start`
3. open web browser and navigate to [http://localhost:3001](http://localhost:3001)

# Deployment
Run `npm run build` and webpack will package everything together into a
fat bundle.js file in the build folder. Then just stash index.html and
bundle.js in nginx, light-httpd, or w/e your preferred web server is.

