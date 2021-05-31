import CoreApiChatBotService from "../services/CoreApiChatbotService.js"
class CoreApiChatBotController {
    constructor() {
        this.coreApiChatBotService = new CoreApiChatBotService();
    }
    //Tratamento das requisições
    async getTakenRepositories(req, res) {
        try {
            const index = req.params.index;
            const repositorios = await this.coreApiChatBotService.getTakenRepositories(index)    
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
export default CoreApiChatBotController;
