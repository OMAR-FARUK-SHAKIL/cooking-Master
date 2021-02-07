const searchingMeal = () => {
    const input = document.getElementById("searchKey");
    console.log(input.value);
    let str = input.value;
    //  console.log('input ===',input);
    //const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${str.charAt(0)}`;
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${str}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => collectMeal(data.meals))
        //console.log('name of food ', data.meals[0].strMeal))
        .catch(error => errorHandle())

}
const errorHandle = () => {
    document.getElementById("searchKey").value = '';
    return alert('Nothing is matched!! please search again by another keyword.');
}

function collectMeal(allMeal) {
    console.log(allMeal);
    const allMealDiv = document.getElementById('allMeal');
    allMeal.forEach(meal => {
        // console.log('innerlog == ', meal.strMeal);
        // console.log('image == ', meal.strMealThumb);




        //for (let i = 0; i < allMeal.length; i++) {
        //const meal = allMeal[i];
        let mealDiv = document.createElement('div');
        // let h1 = document.createElement('h1');
        // let h3 = document.createElement('h3');

        // h1.innerText = country.name;
        // h3.innerText = country.capital;
        


        let div = `
            <img onclick = "displayMealDetails('${meal.strMeal}')" class="image-style" src="${meal.strMealThumb}" alt="">
            <h1 onclick = "displayMealDetails('${meal.strMeal}')" class = 'meal-name'>${meal.strMeal}</h1>
            <button onclick = "displayMealDetails('${meal.strMeal}')"><a href="#">Details</a></button>
        `

        mealDiv.innerHTML = div;
        mealDiv.className = 'meal';

        allMealDiv.appendChild(mealDiv);

    });
}

const displayMealDetails = mealName => {
    let url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    //console.log(url);
    fetch(url2)
        .then(res => res.json())
        .then(data => renderMeal(data.meals))
    //console.log('name of food ', data.meals[0].strMeal))
    //.catch(error => errorHandle())

}

const renderMeal = mealInfo => {
    console.log(mealInfo[0].strIngredient6);
    const detailsDiv = document.getElementById('meal-details');
    detailsDiv.innerHTML = `
    <img src="${mealInfo[0].strMealThumb}" alt="">
    <h1>${mealInfo[0].strMeal}</h1>
    <h3>Ingredients:</h3>
    <ul id = "list">
        <li>${mealInfo[0].strIngredient1}</li>
        <li>${mealInfo[0].strIngredient2}</li>
        <li>${mealInfo[0].strIngredient3}</li>
        <li>${mealInfo[0].strIngredient4}</li>
        <li>${mealInfo[0].strIngredient5}</li>
        <li>${mealInfo[0].strIngredient6}</li>
        <li>${mealInfo[0].strIngredient7}</li>
        <li>${mealInfo[0].strIngredient8}</li>
        <li>${mealInfo[0].strIngredient9}</li>
        <li>${mealInfo[0].strIngredient10}</li>
    </ul>
    `
    document.getElementById('meal-details').style.display='block';
}
