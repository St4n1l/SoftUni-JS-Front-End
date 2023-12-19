function dictionary(arr)
{
    let map = new Map();
    
    arr.forEach((str) => 
    {
        let data = JSON.parse(str);

        for (const [term,definition] of Object.entries(data)) 
        {
            map.set(term,definition);
        }

    })

    
    let sortedArray = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));

    let sortedMap = new Map(sortedArray);

    sortedMap.forEach((value, key) =>
    {
        console.log(`Term: ${key}` + " => " + "Definition: " + value);
    });
}

dictionary(
    [
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Coffee":"Opa"}'
    ])