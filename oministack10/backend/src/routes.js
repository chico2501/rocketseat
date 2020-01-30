<<<<<<< HEAD
const { Router } = require('express');
const axios  = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    console.log(apiResponse.data)
    
})

module.exports = routes;
=======
const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
>>>>>>> da360bf50004db48e3abc18f42e68ecd7cd08539
