function road(speed, type)
{
    type = type.toLowerCase();

    if(type == 'motorway')
    {
       if(speed > 130)
       {
          let byHowMuch = speed - 130;

          if(byHowMuch <= 20)
          {
            console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 130 - speeding`)
          }
          else if(byHowMuch > 20 && byHowMuch <= 40)
          {
             console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 130 - excessive speeding`)
          } 
          else
          {
            console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 130 - reckless driving`)
          }
       }
       else
       {
         console.log(`Driving ${speed} km/h in a 130 zone`)
       }
    }
    else if(type == 'interstate')
    {
        if(speed > 90)
       {
          let byHowMuch = speed - 90;

          if(byHowMuch <= 20)
          {
            console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 90 - speeding`)
          }
          else if(byHowMuch > 20 && byHowMuch <= 40)
          {
             console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 90 - excessive speeding`)
          } 
          else
          {
            console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 90 - reckless driving`)
          }
       }
       else
       {
         console.log(`Driving ${speed} km/h in a 90 zone`)
       }
    }
    else if(type == 'city')
    {
        if(speed > 50)
        {
           let byHowMuch = speed - 50;
 
           if(byHowMuch <= 20)
           {
             console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 50 - speeding`)
           }
           else if(byHowMuch > 20 && byHowMuch <= 40)
           {
             console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 50 - excessive speeding`)
           }
           else
           {
            console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 50 - reckless driving`)
           }
        }
        else
        {
          console.log(`Driving ${speed} km/h in a 50 zone`)
        }
    }
    else if(type == 'residential')
    {
        if(speed > 20)
        {
           let byHowMuch = speed - 20;
 
           if(byHowMuch <= 20)
           {
             console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 20 - speeding`)
           }
           else if(byHowMuch > 20 && byHowMuch <= 40)
          {
             console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 20 - excessive speeding`)
          } 
          else
          {
            console.log(`The speed is ${byHowMuch} km/h faster than the allowed speed of 20 - reckless driving`)
          }
        }
        else
        {
          console.log(`Driving ${speed} km/h in a 20 zone`)
        }
    }
}

road(200, 'motorway')