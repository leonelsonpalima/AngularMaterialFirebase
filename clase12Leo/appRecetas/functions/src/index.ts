import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

/* export const login = functions.https.onRequest((req, res) => {
  res.status(200).json({
    usuario: "sergiohidalgocaceres@gmail.com",
    accessToken: "xxxxxx",
    refreshToken: "kdkdkd"
  })
}) */

import express = require("express")
import { db } from './init';
const app = express()

app.get("/listado", (req, res) => {
  res
    .status(200)
    .json([
      "categoría 1",
      "categoría 2",
      "categoría 3"
    ])
})

app.get("/todos", async (req, res) => {
  const categorias = await db.collection("categorias").get()

  res.send(categorias)
})

export const usuario = functions.https.onRequest(app)



