function cafe(arr)
{
    let n = Number(arr[0]);
    let baristas = [];
    arr.shift();

    for (let index = 0; index < n; index++) 
    {
        let baristaInfo = arr[index].split(' ');
        let baristaCoffees = baristaInfo[2].split(',');

        let currentBarista = 
        {
            name:baristaInfo[0],
            shiftValue: baristaInfo[1],
            coffees:baristaCoffees
        }

        baristas.push(currentBarista)
    }

    for (let index = 0; index < n; index++)
    {
       arr.shift()
        
    }

    while(arr[0] != 'Closed')
    {
        let command = arr[0].split(' / ');

        if(command[0] == "Prepare")
        {
            let baristaName = command[1];
            let shift = command[2];
            let coffee = command[3];

            let neededBarista = {}

            for (const barista of baristas) 
            {
                if(barista.name == baristaName)
                {
                    neededBarista = barista;
                    break;
                }   
            }


            if(neededBarista.shiftValue == shift && neededBarista.coffees.includes(coffee))
            {
                console.log(`${baristaName} has prepared a ${coffee} for you!`);
            }
            else
            {
                console.log(`${baristaName} is not available to prepare a ${coffee}.`);
            }

        }
        else if(command[0] == 'Change Shift')
        {
            let baristaName = command[1];
            let newShiftValue = command[2];
            let neededBarista = {}

            for (const barista of baristas) 
            {
                if(barista.name == baristaName)
                {
                    neededBarista = barista;
                    break;
                }   
            }

            neededBarista.shiftValue = newShiftValue;
            console.log(`${baristaName} has updated his shift to: ${newShiftValue}`);

        }
        else if(command[0] == 'Learn')
        {
            let baristaName = command[1];
            let newCoffee = command[2];
            let neededBarista = {};
            
            for (const barista of baristas) 
            {
                if(barista.name == baristaName)
                {
                    neededBarista = barista;
                    break;
                }   
            }

            if(neededBarista.coffees.includes(newCoffee))
            {
                console.log(`${baristaName} knows how to make ${newCoffee}.`)
            }
            else
            {
                neededBarista.coffees.push(newCoffee);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffee}.`);
            }

        }

        arr.shift();
    }

    for (const barista of baristas)
    {
        console.log(`Barista: ${barista.name}, Shift: ${barista.shiftValue}, Drinks: ${barista.coffees.join(', ')}`);   
    }
}

cafe(['3', 'Alice day Espresso,Cappucino', 'Bob night Latte,Mocha','Carol day Americano,Mocha', 'Prepare / Alice / day / Espresso', 'Change Shift / Bob / night', 'Learn / Carol / Latte', 'Learn / Bob / Latte', 'Prepare / Bob / night / Latte' , 'Closed'])