function addAndSubtract(num1, num2, num3)
{
   let sum = (num1, num2) => 
   {
        return num1 + num2;
   }

   let subtract = (sum, num3) => 
   {
        return sum - num3;
   }

   console.log(subtract(sum(num1,num2),num3));
}

addAndSubtract(1,17,30)

