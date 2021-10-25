document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded')

    fetch('http://localhost:3000/meals')
    .then(resp => resp.json())
    .then(data => data.forEach((mealsObj) => {

        let img = document.createElement('img')
        img.src = mealsObj.image

        const recipeMenu = document.querySelector('#recipe-display')

        recipeMenu.append(img)

        img.addEventListener('click', () => {
            const mainImage = document.querySelector('.detail-image')
            const mainName = document.querySelector('#recipe-name')
            const prepTime = document.querySelector('#prep-time')
            const cookTime = document.querySelector('#cook-time')
            const recipeLink = document.querySelector('#recipe-link')
            
            recipeLink.innerText = mealsObj.link
            cookTime.innerText = mealsObj.cook
            prepTime.innerText = mealsObj.prep
            mainName.innerText = mealsObj.name
            mainImage.src = mealsObj.image
            mainImage.alt = mealsObj.name
        })
    }))
})