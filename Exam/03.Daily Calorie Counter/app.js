const mealUrl = 'http://localhost:3030/jsonstore/tasks/'
const loadBtn = document.querySelector('#load-meals');
const addBtn = document.querySelector('#add-meal');

loadBtn.addEventListener('click', load);
addBtn.addEventListener('click', add);

async function load()
{   
    let mainDiv = document.querySelector('#list');
    mainDiv.innerHTML = '';
    const response = await fetch(mealUrl);
    const meals = await response.json();

    for (const meal of Object.values(meals))
    {
        let div = document.createElement('div');
        div.classList.add('meal');
        div.innerHTML = `<h2>${meal.food}</h2><h3>${meal.time}</h3><h3>${meal.calories}</h3>`   
        let mealDiv = document.createElement('div');
        let changeBtn = document.createElement('button');
        changeBtn.classList.add('change-meal');
        changeBtn.textContent = 'Change';
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-meal');
        deleteBtn.textContent = 'Delete';
        mealDiv.appendChild(changeBtn);
        mealDiv.appendChild(deleteBtn);
        div.appendChild(mealDiv);
        mainDiv.appendChild(div);
        
        let currentId = meal._id;

        let tempMeal = 
        {
            food:meal.food,
            time:meal.time,
            calories:meal.calories,
            id:currentId
        };

        changeBtn.addEventListener('click', () => 
        {
            changeMeal(tempMeal);
        });

        deleteBtn.addEventListener('click', () => {
            deleteMeal(tempMeal);
        });

    }   
}

async function add()
{
    let foodName = document.querySelector('#food');
    let time = document.querySelector('#time');
    let calories = document.querySelector('#calories');

    let food = 
    {
        food:foodName.value,
        time:time.value,
        calories:calories.value
    };

    await fetch(mealUrl,
    {
        method:'POST',
        body:JSON.stringify(food)
    })

    foodName.value = '';
    time.value = '';
    calories.value = '';

    await load()
}

async function changeMeal(meal) 
{   
    console.log(meal)
    document.querySelector('#food').value = meal.food;
    document.querySelector('#time').value = meal.time;
    document.querySelector('#calories').value = meal.calories;
    addBtn.disabled = true;
    const editBtn = document.querySelector('#edit-meal');
    editBtn.disabled = false;
    let editedFoodId = meal.id;
    editBtn.addEventListener('click', edit);

    async function edit()
    {
        let editedFood = 
        {
            food:document.querySelector('#food').value,
            time:document.querySelector('#time').value,
            calories:document.querySelector('#calories').value
        }  
        console.log(editedFood);

        await fetch(mealUrl + editedFoodId,{
            method:'PUT',
            body:JSON.stringify(editedFood)
        })

        await load();
    }
    

    
}

async function deleteMeal(meal)
{
    console.log(meal)
    fetch(mealUrl + meal.id, 
    {
        method:'DELETE'
    });

    await load();
    await load();
}