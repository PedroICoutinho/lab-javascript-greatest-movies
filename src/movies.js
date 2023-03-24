// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//const movies = require("./data")

//const movies = require("./data.js");

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((newElements)=> {
        return {director: newElements.director}
    })
    return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   if(moviesArray.length === 0){
    return 0
   }
   const movieSteven = moviesArray.filter((movies)=> {
    return movies.genre.includes("Drama") && movies.director.includes("Steven Spielberg")
     })
    return movieSteven.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    const scoreAverage = moviesArray.reduce((ccc, average)=>{
        return ccc + average.score
    }, 0)
    return (scoreAverage/scoreAverage.length).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    } 
    const dramaMovies = moviesArray.filter((newElement)=>{
        return newElement.genre.includes("Drama")
    })
    if(dramaMovies.length === 0){
        return 0
    }
    const scoreDrama = dramaMovies.reduce((ccc, average)=>{
        return ccc + average.score
    }, 0)

    return (scoreDrama/dramaMovies.length).toFixed(2)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const year = [...movies]
    const moviesYear = year.map((newElement)=>{
        return newElement.year
    })

    const ordemCrescente = movies.sort((a, b)=>{
        if(a.year === b.year){
            return a.title > b.title
        } else{
            return a.year > b.year
        }
    })
    
    return ordemCrescente


}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMovies = [...movies]
    const moviesInicio = newMovies.map((newElement)=>{
        return newElement.title
    })

    const ordemAlfa = moviesInicio.sort((a, b)=>{
        return a.title > b.title
    })
    return ordemAlfa.slice(0, 19)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
