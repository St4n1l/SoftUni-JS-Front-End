function encodeAndDecodeMessages() 
{
    let encodeBtn = document.querySelector('div button');
    
    encodeBtn.addEventListener('click', encode);

    function encode()
    {
        let areaForText = document.querySelectorAll('div textarea')[1];
        let textToEncode = document.querySelector('div textarea');
        let encodedText = '';
        
        for (let i = 0; i < textToEncode.value.length; i++)
        {
            let newChar = textToEncode.value.charCodeAt(i) + 1;
            encodedText += String.fromCharCode(newChar);   
        }

        areaForText.value = encodedText;
        textToEncode.value = '';
    }

    let decodeBtn = document.querySelectorAll('div button')[1];
    decodeBtn.addEventListener('click',decode)

    function decode()
    {
        let areaForText = document.querySelectorAll('div textarea')[1];
        let textToEncode = document.querySelectorAll('div textarea')[1].value;
        let decodedText = '';
        
        for (let i = 0; i < textToEncode.length; i++)
        {
            let newChar = textToEncode.charCodeAt(i) - 1;
            decodedText += String.fromCharCode(newChar);   
        }

        areaForText.value = decodedText;
    }
}