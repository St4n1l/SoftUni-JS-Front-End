function attachEvents()
{
    const url = 'http://localhost:3030/jsonstore/messenger';
    const targetArea = document.querySelector('#messages');
    const sendBtn = document.querySelector('#submit')
    const refreshBtn = document.querySelector('#refresh');
    const nameInput = document.querySelectorAll('input')[0];
    const messageInput = document.querySelectorAll('input')[1];

    sendBtn.addEventListener('click', async () => {

        const currentMessage = 
        {
            author:nameInput.value,
            content:messageInput.value
        };
        
        let isValidMessage = nameInput.value != '' && messageInput.value != '';

        if(isValidMessage)
        {
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify(currentMessage)
            });
        }
        

        nameInput.value = '';
        messageInput.value = '';
    })

    refreshBtn.addEventListener('click', async () => {
        const response = await fetch(url);

        const messages = await response.json();
        let msgArr = [];

        for (const messegeInfo of Object.values(messages))
        {
            msgArr.push(`${messegeInfo.author}: ${messegeInfo.content}`);
        }

        targetArea.textContent = msgArr.join(`\n`);
    })
}

attachEvents();