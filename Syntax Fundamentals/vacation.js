function vacation(numOfPeople, type, day){
    
    let pricerPerDay = 0;
    type = type.toLowerCase();
    day = day.toLowerCase();

    switch (type){
          case "students":
            switch(day){
                case "friday":
                    pricerPerDay = 8.45;
                    break;
                case "saturday":
                    pricerPerDay = 9.80;
                    break;
                case "sunday":
                    pricerPerDay = 10.46;
                break;
            }
          break;
          case "business":
            switch(day){
                case "friday":
                    pricerPerDay = 10.90;
                    break;
                case "saturday":
                    pricerPerDay = 15.60;
                    break;
                case "sunday":
                    pricerPerDay = 16.00;
                break;
            }
            break;
            case "regular":
                switch(day){
                    case "friday":
                        pricerPerDay = 15.00;
                        break;
                    case "saturday":
                        pricerPerDay = 20.00;
                        break;
                    case "sunday":
                        pricerPerDay = 22.50;
                    break;
                }
            break;
    }

    let sum = pricerPerDay * numOfPeople;

    if(type == "students" && numOfPeople >= 30)
    {
        sum -= sum*(15/100);
    }

    if(type == "business" && numOfPeople >= 100)
    {
        sum = pricerPerDay * (numOfPeople - 10);
    }
 
    if(type == "regular" && numOfPeople >= 10 && numOfPeople <= 20)
    {
        sum -= sum*(5/100);
    }
    
    console.log(`Total price: ${sum.toFixed(2)}`)

}

vacation(15,"Regular", "Friday")