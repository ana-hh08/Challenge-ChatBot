//const express = require('express')
import express from 'express';
import CoreApiChatbotRoutes from './src/routes/CoreApiChatbotRoutes.js';

let app = express();
let port = process.env.PORT || 3000;
app.use(CoreApiChatbotRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em  http:localhost:${port}`)
})

export default app;

