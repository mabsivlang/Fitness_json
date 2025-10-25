const jsonServer = require("json-server");
const server = jsonServer.create();
const cors = require("cors");

const router = jsonServer.router("fitness.json"); 
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8000;

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running`);
});
