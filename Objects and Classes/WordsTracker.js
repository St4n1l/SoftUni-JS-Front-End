function track(arr) {
    let wordsToTrack = arr.shift().split(' ');

    let occurrences = {};

    wordsToTrack.forEach((word) => 
    {
        occurrences[word] = 0;
        
        arr.forEach((element) => 
        {   
            if(word === element)
            {
                occurrences[word]++;
            }
        })
    })


    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of entries)
    {
        console.log(`${key} - ${value}`)
    }
}

track([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])