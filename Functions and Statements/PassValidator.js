function isValid(password)
{
    let validLenght = false;
    let validContain = false;
    let validDigitCount = false;

    if(password.length < 6 || password.length > 10)
    {
        console.log("Password must be between 6 and 10 characters");
    }
    else
    {
        validLenght = true;
    }

    let pattern = /^[a-zA-Z0-9]+$/;

    if(pattern.test(password) == false)
    {
        console.log("Password must consist only of letters and digits");
    }
    else
    {
        validContain = true;
    }

    let digitCount = (password.match(/\d/g) || []).length;

    if(digitCount < 2)
    {
        console.log("Password must have at least 2 digits");
    }
    else
    {
        validDigitCount = true;
    }

    if(validContain && validDigitCount && validLenght)
    {
        console.log("Password is valid")
    }   
}

isValid('MyPass123')