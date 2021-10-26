// let img = document.createElement('img')

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded')
        let chickButt = document.querySelector('#chickenButt')
    
        chickButt.addEventListener('click', () => {
        fetch('http://localhost:3000/chicken')
        .then(resp => resp.json())
        .then(data => data.forEach((chickObj) => {
            let chickImg = document.createElement('img')
            chickImg.src = chickObj.image
            
            const chickDisplay = document.querySelector('#recipe-display')
            chickDisplay.append(chickImg)
            
        

        
    chickImg.addEventListener('click', () => {
        
    const display = document.querySelector('.detail-image')
    display.src = chickObj.image

    const recipeName = document.querySelector("#recipe-name")
    recipeName.innerText = chickObj.name
    const prep = document.querySelector('#prep-time')
    prep.innerText = chickObj.prep
    const cook = document.querySelector('#cook-time')
    cook.innerText = chickObj.cook
    const link = document.querySelector('#recipe-link')
    link.innerText = chickObj.link
    })
   
}))   
})
    const newRecipe = document.getElementById('new-recipe')
    newRecipe.addEventListener('submit', (e) => {
        e.preventDefault()
        const newRecipeObject = {}
        newRecipeObject.name = document.querySelector('#new-name').value 
        newRecipeObject.image = document.querySelector('#new-image').value
        newRecipeObject.prepTime = document.querySelector('#prepTime').value
        newRecipeObject.cookingTime = document.querySelector('#cookingTime').value
        newRecipeObject.recipeLink = document.querySelector('#recipeLink').value
        console.log(newRecipeObject)

        const recipeDisplay = document.querySelector('#recipe-display')
        const newRecipeItem = document.createElement('img')
        newRecipeItem.src = newRecipeObject.image
        recipeDisplay.append(newRecipeItem)
    })
})


