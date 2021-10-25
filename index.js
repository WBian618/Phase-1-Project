document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded')

    fetch('http://localhost:3000/chicken')
    .then(resp => resp.json())
    .then(data => data.forEach(mealsObj => {
console.log(mealsObj)
        let img = document.createElement('img')
        img.className = "thumbnail"
        img.src = mealsObj.image

        const recipeMenu = document.querySelector('#recipe-display')

        recipeMenu.append(img)

        img.addEventListener('click', () => {
            const mainImage = document.querySelector('.detail-image')
            const mainName = document.querySelector('#recipe-name')
            const prepTime = document.querySelector('#prep-time')
            const cookTime = document.querySelector('#cook-time')
            const recipeLink = document.querySelector('#recipe-link')
            
            recipeLink.href = mealsObj.link
            recipeLink.innerText = mealsObj.link
            cookTime.innerText = mealsObj.cook
            prepTime.innerText = mealsObj.prep
            mainName.innerText = mealsObj.name
            mainImage.src = mealsObj.image
            mainImage.alt = mealsObj.name

            button.addEventListener('click',() => {
                const chickButt = document.querySelector('#chickenButt')
                const beefButt = document.querySelector('#beefButt')
                const porkButt = document.querySelector('#porkButt')
                const seaButt = document.querySelector('#seaButt')
                const vegButt = document.querySelector('#vegButt')
                const allButt = document.querySelector('#allButt')

                chickButt = recipeMenu('')
            })
        })
    }))

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


    