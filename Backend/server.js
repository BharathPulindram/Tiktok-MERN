/* import express from "express";
import mongoose from "mongoose";
import Data from './data.js */
const express = require("express");
const mongoose = require("mongoose");

const Data = require("./data");

const Videos = require("./dbModels");
//app config
const app = express();
const port = 9000;

//middlewares

app.use(express.json());
/* app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Origin", "*"),
    next();
}); */
//DB config

const connection__url =
  "mongodb+srv://admin:qqCuFta3lG7ptIxJ@cluster0.m7c7m.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection__url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.post("/v2/posts", (req, res) => {
  //post request is to add videos to database
  //It will let us Add a video document to videos collection.
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
