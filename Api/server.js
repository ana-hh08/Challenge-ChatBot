const express = require('express')
let app = express();
let port = 3000;

const CoreApiChatbotRoute = require('./src/routes/CoreApiChatbotRoutes')

app.use(CoreApiChatbotRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em  http:localhost:${port}`)
})