document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded')

    fetch('http://localhost:3000/meals')
    .then(resp => resp.json())
    .then(data => data.forEach((mealsObj) => {

        let img = document.createElement('img')
        img.src = mealsObj.image

        const recipeMenu = document.querySelector('#recipe-display')

        recipeMenu.append.apply(img)

        img.addEventListener('click', () => {
            
        })
    }))
})