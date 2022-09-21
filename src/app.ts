import { HttpServer } from './server';

// import path from 'path';

// const httpsOptions: HttpsOptions = {
//   keyPath: path.join(__dirname, '../https/key.pem'),
//   certPath: path.join(__dirname, '../https/cert.pem'),
// }

const server = new HttpServer();
server.listen();
