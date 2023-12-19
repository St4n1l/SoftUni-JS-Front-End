window.addEventListener("load", solve);

function solve()
{   
    let expenseType = document.querySelector('#expense');
    let expenseAmount = document.querySelector('#amount');
    let expenseDate = document.querySelector('#date');

    let addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', add);

    function add()
    {
        let expense = 
        {
            type:expenseType.value,
            amount: expenseAmount.value,
            date: expenseDate.value
        }

        let ul = document.querySelector('#preview-list');

        ul.innerHTML = `<li class="expense-item"> <article><p>Type: ${expense.type}</p><p>Amount: ${expense.amount}$</p><p>Date: ${expense.date}</p></article></li>`

        let li = document.querySelector('ul li');
        let div = document.createElement('div');
        div.classList.add('buttons');
        let editBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'edit';
        let okBtn = document.createElement('button');
        okBtn.classList.add('btn');
        okBtn.classList.add('ok');
        okBtn.textContent = 'ok';
        addBtn.disabled = true;

        editBtn.addEventListener('click', () => {
            ul.innerHTML = '';

            document.querySelector('#expense').value = expense.type;
            document.querySelector('#amount').value = expense.amount;
            document.querySelector('#date').value = expense.date;
            addBtn.disabled = false;

        });

        okBtn.addEventListener('click', () => {
            let okUl = document.querySelector('#expenses-list');
            okUl.innerHTML = `<li class="expense-item"> <article><p>Type: ${expense.type}</p><p>Amount: ${expense.amount}$</p><p>Date: ${expense.date}</p></article></li>`;
            ul.innerHTML = '';
        });

        div.appendChild(editBtn);
        div.appendChild(okBtn);
        li.appendChild(div);

        document.querySelector('#expense').value = '';
        document.querySelector('#amount').value = '';
        document.querySelector('#date').value = '';

        let delBtn = document.querySelector('#expenses .btn.delete');
        delBtn.addEventListener('click', () =>{
            window.location.reload();
        })
    }
}