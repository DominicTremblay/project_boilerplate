# Express/React Setup

- Typical setup of Express and React using the Express Generator and Create-React-App

## Front-End

- A React front-end is located in the client folder
- The proxy in `package.json` is set for http://localhost:3001. If your backend is not running on port 3001, change it accordingly
- Run `npm install` to install all the modules
- Run with `npm start`
- `useApplicationData` is a custom hook located in the hooks folder
- `dataReducer` in the reducer folder is an example of a reducer function.

## Back-End

- Run `npm install` to install all the modules
- Copy and rename .env_example to .env and put in your database credentials
- To run the server `npm run dev`
- All your knex queries, should go in helpers/dbHelpers.js
- Use the users routes as an example
- Examples of migrations and seeds are in db folder. Replace with your own.
