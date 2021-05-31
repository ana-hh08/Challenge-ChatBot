"use-strict";
import express from 'express'
const CoreApiChatBotRoutes = express.Router();
import CoreApiChatBotController from '../controllers/CoreApiChatBotController.js'
const coreApiChatBotController = new CoreApiChatBotController()

// Rota para obtenção dos dados dos repositorios
// :index indica o indentificador do repositorio que deseja filtrar 
CoreApiChatBotRoutes.get('/repositories/:index', (req,res) => { coreApiChatBotController.getTakenRepositories(req,res)});
//Rota para obtenção da URL do avatar da take
CoreApiChatBotRoutes.get('/avatar', (req,res) => {  coreApiChatBotController.getTakenAvatar(req,res)});

export default CoreApiChatBotRoutes;