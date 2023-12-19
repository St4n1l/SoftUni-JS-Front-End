function Towns(towns)
{
    for(const currentTown of towns)
    {
        let [town, latitutude, longtitude] = currentTown.split(" | ");

        let townInfo = 
        {
            town,
            latitude: Number(latitutude).toFixed(2),
            longitude: Number(longtitude).toFixed(2)
        };

        console.log(townInfo)
    }
}

Towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])