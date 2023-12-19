function cooking(num, firstCommand,secondCommand,thirdCommand,fourthCommand,fifthCommand)
{   
    let command = [];
    command.push(firstCommand);
    command.push(secondCommand);
    command.push(thirdCommand);
    command.push(fourthCommand);
    command.push(fifthCommand);

    let lengthOfArr = command.length;

    for(let i = 0; i < lengthOfArr; i++)
    {
        if(command[0] == 'chop')
        {
            num /= 2;
        }
        else if(command[0] == 'dice')
        {
            num = Math.sqrt(num);
        }
        else if(command[0] == 'spice')
        {
            num++;
        }
        else if(command[0] == 'bake')
        {
            num *= 3;
        }
        else if(command[0] == 'fillet')
        {
            num -= num*(20/100);
        }
        command.shift();
        console.log(num);
    }
}

cooking(9, 'dice', 'spice', 'chop', 'bake', 'fillet');