function find(sentence)
{
    let reg = /#[a-zA-Z]+/gm;
    let words = sentence.match(reg);

    words.forEach(element =>
    {
        element = element.slice(1);
        console.log(element)
    });
}

find("Nowadays everyone uses # to tag a #special word in #socialMedia");