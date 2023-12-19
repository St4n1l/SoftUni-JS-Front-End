function cooking(command)
{
    let num = parseInt(command[0]);
    command.shift();
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

let command = ['32', 'chop', 'chop', 'chop', 'chop', 'chop'];
cooking(command)