const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");
const Sentiment = require("sentiment");

const dev = process.env.NODE_ENV !== "production";
const handler = app.getRequestHandler();
const port = process.env.PORT || 3000;
const sentiment = new Sentiment();

const firebaseConfig = {
  apiKey: "AIzaSyBLF-niHPCsUF3gmSsCSq4OCU10WMVI7uI",
  authDomain: "my-chat-app-ae081.firebaseapp.com",
  projectId: "my-chat-app-ae081",
  storageBucket: "my-chat-app-ae081.appspot.com",
  messagingSenderId: "605903191360",
  appId: "1:605903191360:web:906d519c41e11400becea5",
  measurementId: "G-PQQLPK3V0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("*", (req, res) => {
  return handler(req, res);
});

// Define your routes and API endpoints here

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
