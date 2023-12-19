function provision(currentStock, newProducts)
{
    let stock = {};

    for (let index = 0; index < currentStock.length; index+=2) 
    {
        let stockName = currentStock[index];
        let stockAmount = Number(currentStock[index + 1]);

        if(!stock.hasOwnProperty(stockName))
        {
            stock[stockName] = stockAmount;
        }
        else
        {
            stock[stockName] += stockAmount;
        }
    }

    for (let index = 0; index < newProducts.length; index+=2) 
    {
        let stockName = newProducts[index];
        let stockAmount = Number(newProducts[index + 1]);

        if(!stock.hasOwnProperty(stockName))
        {
            stock[stockName] = stockAmount;
        }
        else
        {
            stock[stockName] += stockAmount;
        }
    }

   for(const product in stock)
   {
    console.log(`${product} -> ${stock[product]}`)
   }
}

provision(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])