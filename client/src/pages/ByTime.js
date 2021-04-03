import React, { useReducer } from 'react';
import { Button } from '../components/Button';
import { Recipe } from '../components/Recipe';


const reducer = (recipe, action) => {
    switch (action.type) {
        case 'add-recipe':
            return [addRecipe(action.payload)]
        default:
            return recipe;
    }
}

const addRecipe = (payload) => {
    return { id: Date.now(), recipe: payload.recipe };
}


export const ByTime = () => {
    const [recipe, dispatch] = useReducer(reducer, '');

    async function getRecipe(minute) {
        const response = await fetch(`/apis/recipe`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ minutes: minute })
        })
            .then((result) => result.json())
        console.log(await response);

        dispatch(
            { type: 'add-recipe', payload: { recipe: await response } }
        );
    }

    return (
        <>
            <div className="container">
                <h1>Quick Start</h1>
                <p>How much time do you have to prepare your meal?</p>
                <div>
                    <Button onClick={() => getRecipe(15)}>15 mins</Button>
                    <Button onClick={() => getRecipe(30)}>30 mins</Button>
                    <Button onClick={() => getRecipe(60)}>1 hour</Button>
                </div>
                {recipe && (
                    <div className="recipe">
                        <Recipe key={recipe.id} Recipe={recipe} dispatch={dispatch} />
                    </div>
                )}
            </div>
        </>
    )
}
