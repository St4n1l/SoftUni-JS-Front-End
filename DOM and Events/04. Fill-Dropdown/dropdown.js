function addItem() 
{
    let addButton = document.querySelector('input[type="button"]')
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let selectMenu = document.querySelector('#menu');

    addButton.addEventListener("click", add());

    function add()
    {
        let newOption = document.createElement('option');
        newOption.textContent = text;
        newOption.value = value;
        selectMenu.appendChild(newOption);
    }

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}