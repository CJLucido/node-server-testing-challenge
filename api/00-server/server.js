const express = require("express");

const resourcesRouter = require("../01-resources/resources-router");

const server = express();

server.use(express.json());


server.use('/api/resources', resourcesRouter)

server.get("/", (req, res) => {
  res.status(200).json({ api: "resource testing project", dbenv: process.env.DB_ENV });
});


module.exports = server;
