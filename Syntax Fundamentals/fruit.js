function fruit(fruit, grams, pricePerKilo)
{
    let weightInKilos = grams/1000;
    let neededMoney = weightInKilos * pricePerKilo;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)