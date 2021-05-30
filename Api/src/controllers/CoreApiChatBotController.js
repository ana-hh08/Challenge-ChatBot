const CoreApiChatBotService = require("../services/CoreApiChatbotService.js")
class CoreApiChatBotController {
    constructor() {
        this.coreApiChatBotService = new CoreApiChatBotService();
    }
    //Tratamento das requisições
    async getTakenRepositories(req, res) {
        try {
            const limit = req.params.limit;
            const repositorios = await this.coreApiChatBotService.getTakenRepositories(limit)    
            res.send({
                repositorios
            })
        } catch (error) {
            res.status(500).send({
                info: error.message
            })
        }
    }
    async getTakenAvatar(req, res) {
        try {
            const avatar = await this.coreApiChatBotService.getTakenAvatar()
            res.send(avatar)
        } catch (error) {
            res.status(500).send({
                info: error.message
            })
        }
    }
}

module.exports = CoreApiChatBotController