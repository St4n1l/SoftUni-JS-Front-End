function attachEvents() 
{   
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const loadBtn = document.querySelector('#btnLoad');

    loadBtn.addEventListener('click', loadContacts)

    async function loadContacts()
    {
        const response = await fetch(url);
        const contacts = Object.values(await response.json());

        const ul = document.querySelector('#phonebook');

        for (const contact of contacts)
        {
            const li = document.createElement('li');
            const delBtn = document.createElement('button');

            li.textContent = `${contact.person}: ${contact.phone}`

            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', () => {
                fetch(url + `/${contact._id}`, {
                    method: 'DELETE'
                })

                li.remove();
            })

            li.appendChild(delBtn);
            ul.appendChild(li);          
        }
    }

    const createBtn = document.querySelector('#btnCreate');

    createBtn.addEventListener('click', createContanct);

    async function createContanct()
    {
        const person = document.querySelector('#person');
        const phone = document.querySelector('#phone');
        
        const contact = 
        {
            person: person.value,
            phone: phone.value
        }

        await fetch(url,{
            method:'POST',
            body: JSON.stringify(contact)

        });

        document.querySelector('#person').value = '';
        document.querySelector('#phone').value = '';
    }
}


attachEvents();