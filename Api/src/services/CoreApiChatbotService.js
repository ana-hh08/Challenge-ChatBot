import config from "../config.js"
import axios from 'axios'

class CoreApiChatBotService {
  constructor() {
    this.githubApiConfig = config.githubApiConfig
  }
  async getTakenRepositories(limit) {
    const pathGetRepos = this.githubApiConfig.baseUrl.concat('users/takenet/repos?sort=created&direction=asc')
    const response = await axios.get(pathGetRepos)
    // Filtro que consiste em pegar apenas os 5(cinco) repositórios mais antigos da Take
    const reposCSharp = []
    for (let i = 0; i < response.data.length; i++) {
      let {
        full_name,
        description,
        language,
        created_at
      } = response.data[i]

      if (language == 'C#') {
        reposCSharp.push({
          full_name,
          description,
          created_at
        })
      }
    }
    return reposCSharp.slice(0, limit);

  }
  async getTakenAvatar() {
    const pathGetRepoInfo = this.githubApiConfig.baseUrl.concat('users/takenet')
    const response = await axios.get(pathGetRepoInfo)
    const avatar = response.data.avatar_url
    return avatar
  }
}
export default CoreApiChatBotService;
