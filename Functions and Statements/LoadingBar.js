function loadingBar(num)
{
    let loadingBar = "";

    let counter = 0;
    for (let index = 0; index < num; index++) 
    {
        if(counter == num / 10)
        {
            break;
        }

        loadingBar += "%";

        counter++;
    }

    let remainder = 10 - counter;
    
    for (let index = 0; index < remainder; index++) 
    {
        loadingBar += ".";
    }

    if(num == 100)
    {
        console.log(`${num}% Complete!`);
    }
    else
    {
        console.log(`${num}% [${loadingBar}]`);
        console.log("Still loading...");
    }
   
}

loadingBar(30)