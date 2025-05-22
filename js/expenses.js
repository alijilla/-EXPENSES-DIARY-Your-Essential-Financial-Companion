let expenses = [];

// Function to calculate total cost for the day
function calculateTotalCost() {
  let totalCost = 0;
  expenses.forEach(function (expense) {
    totalCost += expense.amount;
  });
  document.getElementById("total-amount").textContent = "Total Cost: $" + totalCost.toFixed(2);
}

// Function to display expenses
function displayExpenses() {
  let expensesContainer = document.getElementById("expenses");
  expensesContainer.innerHTML = "";
  expenses.forEach(function (expense) {
    let expenseElement = document.createElement("div");
    expenseElement.classList.add("expense");

    let idElement = document.createElement("p");
    idElement.textContent = "ID: " + expense.id;

    let amountElement = document.createElement("p");
    amountElement.textContent = "Amount: $" + expense.amount.toFixed(2);

    let categoryElement = document.createElement("p");
    categoryElement.textContent = "Category: " + expense.category;

    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = "Description: " + expense.description;

    let imageElement = document.createElement("img");
    imageElement.src = expense.image;
    imageElement.alt = "Expense image";

    let commentsElement = document.createElement("p");
    commentsElement.textContent = "Comments: " + expense.comments;

    expenseElement.appendChild(idElement);
    expenseElement.appendChild(amountElement);
    expenseElement.appendChild(categoryElement);
    expenseElement.appendChild(descriptionElement);
    expenseElement.appendChild(imageElement);
    expenseElement.appendChild(commentsElement);

    expensesContainer.appendChild(expenseElement);
  });
  calculateTotalCost();
}

// Function to add a new expense
function addExpense(amount, category, description, image, comments) {
  let newExpenseId = expenses.length + 1;
  expenses.push({
    id: newExpenseId,
    amount: parseFloat(amount),
    category: category,
    description: description,
    image: image,
    comments: comments,
  });
  displayExpenses();
}

// Event listener for the "Add Expense" form
document.getElementById("add-expense-form").addEventListener("submit", function (event) {
  event.preventDefault();
  let amount = document.getElementById("expense-amount").value;
  let category = document.getElementById("expense-category").value;
  let description = document.getElementById("expense-description").value;
  let image = document.getElementById("expense-image").files[0];
  let comments = document.getElementById("expense-comments").value;

  // Perform form validation as needed

  // Add the new expense
  addExpense(amount, category, description, image, comments);

  // Reset the form
  document.getElementById("add-expense-form").reset();
});

// Display expenses when the page loads
window.onload = displayExpenses;