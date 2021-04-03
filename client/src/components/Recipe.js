import React from 'react'

const styles = {
    recipe_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export const Recipe = ({ Recipe, dispatch }) => {
    const recipe = Recipe[0].recipe;
    return (
        <div style={styles.recipe_container}>
            <h2>{recipe.title}</h2>
            <h3>Prep time: {recipe.readyInMinutes} minutes</h3>
            <img src={recipe.image} alt="" />
            <h3>Summary</h3>
            <p dangerouslySetInnerHTML={{__html: recipe.summary }}></p>
            <h3>Instructions</h3>
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
        </div>
    )
}
