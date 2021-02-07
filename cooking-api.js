const searchingMeal = () => {
    const lol = document.getElementById("searchKey");
    // var input = toString(lol.value);
    console.log(lol.value);
    let str = lol.value;
    //  console.log('input ===',input);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${str.charAt(0)}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => collectMeal(data.meals))
        //console.log('name of food ', data.meals[0].strMeal))
        .catch(error => alert('please search again.'))

}
function collectMeal(allMeal) {
    console.log(allMeal);
    const allMealDiv = document.getElementById('allMeal');
    allMeal.forEach(meal => {
        console.log('innerlog == ',meal.strMeal);
        console.log('image == ',meal.strMealThumb);
        
        


        //for (let i = 0; i < allMeal.length; i++) {
        //const meal = allMeal[i];
        let mealDiv = document.createElement('div');
        // let h1 = document.createElement('h1');
        // let h3 = document.createElement('h3');

        // h1.innerText = country.name;
        // h3.innerText = country.capital;
        const allId = [];
        allId.push(meal.idMeal);


        let div = `
            <h1 class = 'country-name'>${meal.strMeal}</h1>
            <h3>${meal.idMeal}</h3>
            <img src="${meal.strMealThumb}" alt="">
            <button onclick = "displayCountryDetails('${meal.strMeal}')">Details</button>
        `

        mealDiv.innerHTML = div;
        mealDiv.className = 'meal';

        allMealDiv.appendChild(mealDiv);


        //}
    });
    allId.forEach(id => {
        console.log('IDs: == ',id);
    });
    
}


//let btnInput = document.getElementById('btn');
// btnInput.addEventListener("click", searchingMeal());
// btnInput.addEventListener("click",console.log('clicked'))
