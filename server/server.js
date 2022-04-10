// import proper dependcies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");

// const models = require('./models')

// //import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const { config } = require("process");
// const { Mongoose } = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

//create new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: config,
});

//integrate Apollo server with Express as middleware
server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// app.use(routes);

db.once("open", () => {
  app.listen(3001, () => {
    console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
  });
});