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



const collectMeal = allMeal => {
    const allMealDiv = document.getElementById('allMeal');
    allMeal.forEach(meal => {
        // console.log('innerlog == ', meal.strMeal);
        let mealDiv = document.createElement('div');
        let div = `
            <a href="#">
                <img onclick = "displayMealDetails('${meal.strMeal}')" class="image-style" src="${meal.strMealThumb}" alt="">
                <h1 onclick = "displayMealDetails('${meal.strMeal}')" class = 'meal-name'>${meal.strMeal}</h1>
            </a>
            `
        //<button onclick = "displayMealDetails('${meal.strMeal}')">Details</button>
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
    document.getElementById('meal-details').style.display = 'block';
}


document.getElementById("searchKey").
    addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            document.getElementById("btn").click();
        }
    }); 