"use-strict";
import express from 'express'
const CoreApiChatBotRoutes = express.Router();
import CoreApiChatBotController from '../controllers/CoreApiChatBotController.js'
const coreApiChatBotController = new CoreApiChatBotController()

// Rota para obtenção dos dados dos repositorios
// :limit indica a quantidade de repositorios que deseja filtrar
CoreApiChatBotRoutes.get('/repositories/:limit', (req,res) => { coreApiChatBotController.getTakenRepositories(req,res)});
//Rota para obtenção da URL do avatar da take
CoreApiChatBotRoutes.get('/avatar', (req,res) => {  coreApiChatBotController.getTakenAvatar(req,res)});

export default CoreApiChatBotRoutes;