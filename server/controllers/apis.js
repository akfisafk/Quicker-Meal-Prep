import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const api_key = process.env.API_KEY;

export const recipe = async (req, res) => {
    console.log('Someone is posting to recipe api');
    const { minutes } = req.body;
    console.log(minutes);
    const data = await getRecipe(await getTotalRecipeCount(minutes));
    console.log(await data);
    const recipeId = await data.id;
    const recipe = await findRecipe(await recipeId)
    res.send(recipe);
}

async function getTotalRecipeCount(time) {
    let totalRecipes = '';
    console.log('Searching recipe has started');
    await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&maxReadyTime=${time}&number=1`)
        .then(response => {
            totalRecipes = response.data.totalResults;
            console.log(`The total amount of recipes found is : ${totalRecipes}`);
        })
        .catch(error => {
            console.log(error.response);
        })
    if (totalRecipes > 100) {
        totalRecipes = 100;
    }
    let timeAndTotal = {
        time: time,
        totalRecipes: totalRecipes
    }
    return timeAndTotal;
}

async function getRecipe(timeAndTotal) {
    const { time, totalRecipes } = timeAndTotal;
    let randomRecipe = '';
    let data = [];
    await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&maxReadyTime=${time}&number=${totalRecipes}`)
        .then(response => {
            randomRecipe = Math.floor(Math.random() * totalRecipes) + 1;
            console.log(`The random recipe position found is : ${randomRecipe}`);
            data = response.data.results[randomRecipe];
        })
        .catch(error => {
            console.log(error.response);
        })
    return data;
}

async function findRecipe(id) {
    let recipe = [];
    await axios.get('https://api.spoonacular.com/recipes/' + id + `/information?apiKey=${api_key}&includeNutrition=false`)
        .then(response => {
            recipe = response.data;
        })
        .catch(error => {
            console.log(error.response);
        })
    return recipe
}