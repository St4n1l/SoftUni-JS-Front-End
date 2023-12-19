function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() 
  {
    let rawInput = document.querySelector("textarea").value;

    let arrays = JSON.parse(rawInput);

    let restaurants = [];

    for (const element of arrays) 
    {
      let restaurantInfo = element.split(" - ");
      let employees = restaurantInfo[1].split(", ");
      let arrOfEmployees = [];

      for (let index = 0; index < employees.length; index++) 
      { 
         let info = employees[index].split(" ");

        let current =
        {
          name: info[0],
          salary: Number(info[1])
        };

        arrOfEmployees.push(current);
      }

      let existingRestaurant = restaurants.find(
         (r) => r.name === restaurantInfo[0]
       );
 
       if (existingRestaurant)
        {
         existingRestaurant.employees = existingRestaurant.employees.concat(
           arrOfEmployees
         );

       } else 
       {
         let restaurant = 
         {
           name: restaurantInfo[0],
           employees: arrOfEmployees,
         };
         restaurants.push(restaurant);
       }
     }

    let bestRestaurant = {};
    let bestAvgSalary = 0;

    for (const restaurant of restaurants) 
    {
         let currentAvgSalary = 0;
         for (const employee of restaurant.employees)
         {
            currentAvgSalary += employee.salary; 
         }

         currentAvgSalary /= restaurant.employees.length;

         if(currentAvgSalary > bestAvgSalary)
         {
            bestAvgSalary = currentAvgSalary;
            bestRestaurant = restaurant;
         }
    }

    let bestSalary = 0;
    let bestWorkersString = '';

    for (const employee of bestRestaurant.employees.sort((a,b) => b.salary - a.salary)) 
    {
      let currentSalary = employee.salary;
      
      bestWorkersString += `Name: ${employee.name} With Salary: ${currentSalary} `;

      if(currentSalary>bestSalary)
      {
         bestSalary = currentSalary;
      }
    }

    let bestRestaurantString = `Name: ${bestRestaurant.name} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
    
    let bestRestaurantDiv = document.getElementById("bestRestaurant");
    bestRestaurantDiv.querySelector('p').textContent = bestRestaurantString;
    let bestWorkersDiv = document.getElementById('workers');
    bestWorkersDiv.querySelector('p').textContent = bestWorkersString.trim();



  }
}
