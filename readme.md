Some notes:
==========

Starting the Server:
-------------------

`npm start` will start the server at the entry point, `./lib/index.js`, assuming `npm build` has already been run.

Build Process / Using Babel
---------------------------

`npm run build` will run the client-side webpack build process and the server-side babel build process. Client code will end up in `./public/bundle.js`, and server code will end up in `./lib`. `npm run build:watch` will start the babel and webpack watch utilities, reloading code as it is changed. Since the server is started with [nodemon](http://nodemon.io/) and the webpack hot-reloader is used to watch the client-side code, changes to both server-side and client-side code will be hot-reloaded into the running app.

REST API
--------

The REST API is only accessible from client-side HTTP requests, not in the browser, but I'm including it here for reference.

`GET /pictures` responds with a list of all pictures.
`GET /pictures/:picture` responds with a particular picture.
`POST /pictures` adds a new picture to the database, specified by the request body data.
`PUT /pictures/:picture` updates a picture with the request body data.
`DELETE /pictures/:picture` deletes a picture from the database.

`GET /comments/:picture` responds with a list of all comment for a particular picture.
`POST /comments` posts a comment, specified by the request body data.
`PUT /comments/:comment` updates a particular comment.
`DELETE /comments/:comment` deletes a particular comment.
