// let img = document.createElement('img')

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded')
        let chickButt = document.querySelector('#chickenButt')
        let beefButt = document.querySelector('#beefButt')
        
        chickButt.addEventListener('click', () => {
            const display = document.querySelector('#recipe-display')
            display.innerText = ""
            fetch('http://localhost:3000/chicken')
        .then(resp => resp.json())
        .then(data => data.forEach((chickObj) => {
            let chickImg = document.createElement('img')
            chickImg.src = chickObj.image
            const chickDisplay = document.querySelector('#recipe-display')
            chickDisplay.append(chickImg);
        
        
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
    beefButt.addEventListener('click', () => {
        const display = document.querySelector('#recipe-display')
    display.innerText = ""
        fetch('http://localhost:3000/beef')
        .then(resp => resp.json())
        .then(data => data.forEach((beefObj) => {
            let beefImg = document.createElement('img')
            beefImg.src = beefObj.image
            const beefDisplay = document.querySelector('#recipe-display')
            beefDisplay.append(beefImg)

    beefImg.addEventListener('click', () => {
        const display = document.querySelector('.detail-image')
    display.src = beefObj.image
    const recipeName = document.querySelector("#recipe-name")
    recipeName.innerText = beefObj.name
    const prep = document.querySelector('#prep-time')
    prep.innerText = beefObj.prep
    const cook = document.querySelector('#cook-time')
    cook.innerText = beefObj.cook
    const link = document.querySelector('#recipe-link')
    link.innerText = beefObj.link
    })
        }))
    })

    let porkButt = document.querySelector('#porkButt')

    porkButt.addEventListener('click', () => {
        const display = document.querySelector('#recipe-display')
        display.innerText = ""
        fetch('http://localhost:3000/Pork')
    .then(resp => resp.json())
    .then(data => data.forEach((porkObj) => {
        
        let porkImg = document.createElement('img')
        porkImg.src = porkObj.image

        const porkDisplay = document.querySelector('#recipe-display')
        porkDisplay.append(porkImg)




    porkImg.addEventListener('click', () => {

    const display = document.querySelector('.detail-image')
    display.src = porkObj.image

    const recipeName = document.querySelector("#recipe-name")
    recipeName.innerText = porkObj.name
    const prep = document.querySelector('#prep-time')
    prep.innerText = porkObj.prep
    const cook = document.querySelector('#cook-time')
    cook.innerText = porkObj.cook
    const link = document.querySelector('#recipe-link')
    link.innerText = porkObj.link
    })
    }))
})

let seaButt = document.querySelector('#seaButt')

seaButt.addEventListener('click', () => {
    const display = document.querySelector('#recipe-display')
    display.innerText = ""
    fetch('http://localhost:3000/seafood')
    .then(resp => resp.json())
    .then(data => data.forEach((seaObj) => {
        let seaImg = document.createElement('img')
        seaImg.src = seaObj.image
        
        const seaDisplay = document.querySelector('#recipe-display')
        seaDisplay.append(seaImg)
        
    

    
seaImg.addEventListener('click', () => {
    
const display = document.querySelector('.detail-image')
display.src = seaObj.image

const recipeName = document.querySelector("#recipe-name")
recipeName.innerText = seaObj.name
const prep = document.querySelector('#prep-time')
prep.innerText = seaObj.prep
const cook = document.querySelector('#cook-time')
cook.innerText = seaObj.cook
const link = document.querySelector('#recipe-link')
link.innerText = seaObj.link
})
}))
})

let vegButt = document.querySelector('#vegButt')

vegButt.addEventListener('click', () => {
    const display = document.querySelector('#recipe-display')
    display.innerText = ""
    fetch('http://localhost:3000/vege')
    .then(resp => resp.json())
    .then(data => data.forEach((vegObj) => {
        let vegImg = document.createElement('img')
        vegImg.src = vegObj.image
        
        const vegDisplay = document.querySelector('#recipe-display')
        vegDisplay.append(vegImg)
        
    
    

    
vegImg.addEventListener('click', () => {
    
const display = document.querySelector('.detail-image')
display.src = vegObj.image

const recipeName = document.querySelector("#recipe-name")
recipeName.innerText = vegObj.name
const prep = document.querySelector('#prep-time')
prep.innerText = vegObj.prep
const cook = document.querySelector('#cook-time')
cook.innerText = vegObj.cook
const link = document.querySelector('#recipe-link')
link.innerText = vegObj.link
})
}))
})

// let clearButt = document.querySelector('#clearButt')
// clearButt.addEventListener('click', () => {
//     const display = document.querySelector('#recipe-display')
//     display.innerText = ""
// })

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