"use-strict";
const express = require('express');
const CoreApiChatBotRoutes = express.Router();
const CoreApiChatBotController = require('../controllers/CoreApiChatBotController')
const coreApiChatBotController = new CoreApiChatBotController()

// Rota para obtenção dos dados dos repositorios
// :limit indica a quantidade de repositorios que deseja filtrar
CoreApiChatBotRoutes.get('/repositories/:limit', (req,res) => { coreApiChatBotController.getTakenRepositories(req,res)});
//Rota para obtenção da URL do avatar da take
CoreApiChatBotRoutes.get('/avatar/', (req,res) => {  res.send('Hello')});

module.exports = CoreApiChatBotRoutes