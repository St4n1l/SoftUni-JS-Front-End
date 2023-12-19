function parking(arr)
{
    let carsInParking = [];

    for (const carData of arr) 
    {   
        let carInfo = carData.split(", ");

        if(carInfo[0] == "IN" && !carsInParking.includes(carInfo[1]))
        {
            carsInParking.push(carInfo[1]);
        }
        else if(carInfo[0] == "OUT" && carsInParking.includes(carInfo[1]))
        {
            let index = carsInParking.indexOf(carInfo[1]);
            carsInParking.splice(index,1);
        }
    }


    if(carsInParking.length == 0)
    {
        console.log("Parking Lot is Empty");
    }
    else
    {
        carsInParking.sort((a,b) => {
            return a.localeCompare(b)
        });

            carsInParking.forEach((car) => {
            console.log(car);
        })
    }


}

parking(['IN, CA2844AA','IN, CA1234TA','OUT, CA2844AA','IN, CA9999TT','IN, CA2866HI','OUT, CA1234TA','IN, CA2844AA','OUT, CA2866HI','IN, CA9876HH','IN, CA2822UU'])