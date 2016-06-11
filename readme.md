Some notes:
==========

Starting the Server:
-------------------

`npm start` will start the server at the entry point, ./lib/index.js, assuming `npm build` has already been run.

Build Process / Using Babel
---------------------------

Running `npm build` will run the client-side webpack build process and the server-side babel build process. Client code will end up in ./public/bundle.js, and server code will end up in ./lib
