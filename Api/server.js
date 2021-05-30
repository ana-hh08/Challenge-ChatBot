const express = require('express')
const axios = require('axios');
//import axios from 'axios';
//import { createRequire } from 'module'
const config = require("./src/config.js")
const githubApiConfig = config.githubApiConfig
let app = express();
let port = 3000;


app.get('/repositorios/', async (req, res) => {

  //https://api.github.com/users/lissavxo/repos?sort=created&direction=desc
  const pathGetRepos = githubApiConfig.baseUrl.concat('users/takenet/repos?sort=created&direction=asc')
  const response = await axios.get(pathGetRepos)

  // filtrar as 5 que contêm c# 
  let count = 0
  const reposCSharp = []

  for(i=0;i<response.data.length;i++) {
    let { full_name, description, language, created_at} = response.data[i]
    
    if(language == 'C#'){ //Deixar somente as que tem C# no campo language
      reposCSharp.push({full_name, description, created_at})
    }
  }
  res.send({resultado: reposCSharp.slice(0,5)})
})
app.get('/avatar/', async (req, res) =>{
  const pathGetRepoInfo = githubApiConfig.baseUrl.concat('users/takenet')
  console.log(pathGetRepoInfo)
  const response = await axios.get(pathGetRepoInfo)
  const avatar = response.data.avatar_url
  res.send(avatar)
})
app.listen(port, () => {
  console.log(`Servidor rodando em  http:localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl+c');
})