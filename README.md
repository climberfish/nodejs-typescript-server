# Node.js web server (Typescript)

This is a study of creating a basic web server using Node.js without any frameworks or packages (typescript packages only).

## Running the application

Clone the repository.

Run `npm install` to install required npm packages.

Run `npm run dev` to run the application in development mode.

Run `npm run build` to build the application.

Run `npm run start` (after building) to run the application in production mode.

Generate SSL certificates:

`openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout https/key.pem -out https/cert.pem`
