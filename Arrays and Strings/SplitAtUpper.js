function split(sentence)
{
    let result = sentence.split(/(?=[A-Z])/);
    console.log(result.join(", "));
}

split('SplitMeIfYouCanHaHaYouCantOrYouCan');