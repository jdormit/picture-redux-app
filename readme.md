Some notes:
==========

Starting the Server:
-------------------

`npm start` will start the server at the entry point, `./lib/server.js`, assuming `npm build` has already been run.
The server assumes that a local instance of of MongoDB is running. Get Mongo [here](https://www.mongodb.com/) and run it with `mongod`.

Build Process
---------------------------

`npm run build` will run the webpack build process. Client-side code will get bundled to `public/bundle.js` and server-side code will be bundled to `lib/server.js`. Both client and server code are bundled with source maps, so Node stack traces and the chrome debugger will refer to the source code, not the bundled code. Webpack is configured using Babel to transpile es6 syntax.

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

Redux Store
-----------

The client side application state is stored in a map called the store. Here is its structure:

```javascript
{
  pictureState: {
    pictures: [
      pictureId: {
        _id: String,
        url: String,
        title: String,
        caption: String,
        postedBy: String,
        datePosted: Date
      },
      ...
    ],
    isFetching: Boolean
  },
  commentState: {
    comments: [
      commentId: {
        _id: String,
        text: String,
        datePosted: Date,
        postedBy: String,
        _picture: ObjectId
      },
      ...
    ],
    isFetching: Boolean
  }
}
```
