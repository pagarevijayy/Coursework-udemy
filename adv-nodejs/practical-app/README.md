# Data caching with Redis App

Data caching with Redis using blog app.

Tech stack, services, concepts:
- Redis (caching - set, get, hset, hget, clear cache, expire cache.)
- packages: passport.js, google oauth 2.0, cookie session, body parser
- server: node express server, mongodb + mongoose
- client: react + material design

### Setup

- Run `npm install` in the root of the project to install server dependencies
- Change into the client directory and run `npm install --legacy-peer-deps`
- Change back into the root of the project and run `npm run dev` to start the server
- Access the application at `localhost:3000` in your browser

**Important:**
The credentials for the Mongo Atlas DB in `dev.js` are read only. If you attempt to log in without first adding your own connection string (covered later in the course) you will see an error: `[0] MongoError: user is not allowed to do action [insert] on [advnode.users]`
