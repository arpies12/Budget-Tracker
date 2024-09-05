let income = 0;
let expenses = 0;
let savingsGoal = 0;
let transactionData = JSON.parse(localStorage.getItem("transactions")) || [];

const incomeAmount = document.getElementById("incomeAmount");
const expenseAmount = document.getElementById("expenseAmount");
const balanceAmount = document.getElementById("balanceAmount");
const savingsGoalDisplay = document.getElementById("savingsGoal");
const transactionForm = document.getElementById("transactionForm");
const transactionList = document.getElementById("transactionList");
const goalInput = document.getElementById("goalInput");
const setGoalBtn = document.getElementById("setGoal");

transactionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;

    if (description && amount) {
        const transaction = { description, amount, type, category };
        transactionData.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(transactionData));

        addTransaction(transaction);
        updateBudget();

        document.getElementById("description").value = "";
        document.getElementById("amount").value = "";
    }
});

function addTransaction(transaction) {
    const listItem = document.createElement("li");
    listItem.classList.add(transaction.type);
    listItem.innerHTML = `${transaction.description} (${transaction.category}) <span>${transaction.type === "income" ? "+" : "-"}₹${transaction.amount.toFixed(2)}</span>`;
    
    transactionList.appendChild(listItem);
    
    if (transaction.type === "income") {
        income += transaction.amount;
    } else {
        expenses += transaction.amount;
    }
}

function updateBudget() {
    incomeAmount.textContent = `₹${income.toFixed(2)}`;
    expenseAmount.textContent = `₹${expenses.toFixed(2)}`;
    const balance = income - expenses;
    balanceAmount.textContent = `₹${balance.toFixed(2)}`;
    checkGoal(balance);
}

function checkGoal(balance) {
    if (savingsGoal && balance >= savingsGoal) {
        alert("Congratulations! You've reached your savings goal!");
    }
}

setGoalBtn.addEventListener("click", () => {
    savingsGoal = parseFloat(goalInput.value);
    savingsGoalDisplay.textContent = `₹${savingsGoal.toFixed(2)}`;
});

function loadTransactions() {
    transactionData.forEach(transaction => {
        addTransaction(transaction);
    });
    updateBudget();
}

const clearHistoryBtn = document.getElementById("clearHistory");

clearHistoryBtn.addEventListener("click", function() {
    // Clear transaction data from localStorage
    localStorage.removeItem("transactions");

    // Clear all variables
    income = 0;
    expenses = 0;
    transactionData = [];

    // Update UI elements
    incomeAmount.textContent = `₹0.00`;
    expenseAmount.textContent = `₹0.00`;
    balanceAmount.textContent = `₹0.00`;

    // Remove all transaction list items
    transactionList.innerHTML = "";
    
    // Reset savings goal
    savingsGoalDisplay.textContent = `₹0.00`;
    savingsGoal = 0;
    goalInput.value = "";
});


// Load previous transactions on page load
window.onload = loadTransactions;
