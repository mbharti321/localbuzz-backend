# localbuzz-backend

This project is backend project for Business listing and reviewing.

### Get started

- Intall all dependaencies: `npm install`
- Intall **nodemon** that helps in **automatically restarting** your Node.js application when file changes are detected

  `npm install -g nodemon`

- Run the app `nodemon index.js`
- The app will listen on port 3000. You can access it at http://localhost:3000.

### Usage

- Access the application at http://localhost:3000.
- The root URL ("/") will display a "Hello, world!" message.
- The "/user" endpoint will retrieve users from the database where the ID is less than 5

### Folder structure
```bash
project/
| - controllers/         # Contains controller files to handle route logic
|   | - userController.js
|   | - ...
| - middleware/          # Contains middleware files for custom middleware functions
|   | - errorMiddleware.js
|   | - ...
| - routes/              # Contains route files to define routes and reference controllers
|   | - userRoutes.js
|   | - ...
| - dbConfig.js          # Configuration file for database connection
| - index.js             # Main application file, to start the server.
| - package.json         # Project dependencies and scripts
| - README.md            # Project documentation and instructions
| - .gitignore           # Specifies files and directories to be ignored by Git
| - ...

```

### Code explanation

The app.get("/") route retrieves all the records from the employees table and sends them back to the client.

The connection.query() method is used to execute a SQL query against the database. The err and results parameters are passed to the callback function. The err parameter will be set if there is an error, and the results parameter will contain the results of the query.

The app.listen() method starts the Express server on port 3000.

The connection.connect() method connects to the MySQL database. The err parameter will be set if there is an error, and the results parameter will be set to a connection object.

---
### Extra
- Node Folder Structure: [node-js-project-structure-a-short-guide](https://dreamix.eu/blog/frontpage/node-js-project-structure-a-short-guide)
