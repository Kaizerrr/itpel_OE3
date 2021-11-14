const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list')
const totalExpenses = document.querySelector('#total-expenses');
const alertInput = document.querySelector('#io-alert-controller')

let myTotalExpenses = 0;

const clear = () =>{
    reasonInput.value = '';
    amountInput.value = '';
};

cancelBtn.addEventListener('click', clear);

addBtn.addEventListener('click', () => {
   
    const reasonEntered = reasonInput.value;
    const amountEntered = amountInput.value;

    if(reasonEntered.trim().length <= 0 || amountEntered <= 0 || amountEntered.trim().length <= 0){
        alert("Please input reason and amount");
       
        /*alertInput.create({
            message: 'Please enter valid values',
            header: 'Invalid inputs',
            buttons: ['Ok']
        })
        .then(alertElement => {
            alertElement.present();
        });*/

        return;
    }

    console.log(reasonEntered, amountEntered);

    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = reasonEntered + ': P' + amountEntered;
    expensesList.appendChild(newExpenses);

   // const expensesOutput = document.createElement('ion-item');
    myTotalExpenses += +amountEntered;
   // expensesOutput.textContent = myTotalExpenses;
    //totalExpenses.appendChild(expensesOutput);

    //expensesOutput.textContent = myTotalExpenses;
    totalExpenses.textContent = myTotalExpenses;


    clear();



});

