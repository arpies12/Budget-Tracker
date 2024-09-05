# Budget Tracker

The Budget Tracker** is a feature-rich web application designed to help users manage their personal finances effectively. It allows users to track income, expenses, and savings, providing a clear overview of their financial situation. Users can set savings goals, categorize transactions, and view their balance in real-time.

## Features

- **Track Income & Expenses**: Add income and expenses with descriptions, amounts, and categories.
- **Categorize Transactions**: Select from predefined categories like Salary, Bills, Groceries, Entertainment, and Others.
- **Set Savings Goals**: Set a savings goal and track progress. The app notifies you once the goal is achieved.
- **Persistent Data**: All transactions are stored in `localStorage`, so the data remains even after refreshing the page.
- **Clear Transaction History**: Remove all transaction data and reset your budget with the "Clear Transaction History" button.
- **Responsive Design**: The app is designed to work well on both desktop and mobile devices.

## Technologies Used

- **HTML**: Used for the structure and layout of the web page.
- **CSS**: Provides styling and responsive design.
- **JavaScript**: Implements the app’s functionality, including transaction handling, updating the budget, and local storage management.

## Getting Started

### Prerequisites

- A modern web browser (Google Chrome, Firefox, etc.)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/advanced-budget-tracker.git

2. Navigate to the project directory:
bash
Copy code
cd advanced-budget-tracker

Open the index.html file in your browser to run the app locally.

Usage
Add Transactions:
Enter a description, amount, select if it's an income or expense, and categorize the transaction.
Click "Add Transaction" to add it to the list.

3. Set Savings Goal:
Enter your savings goal in the provided field and click "Set Goal".
The goal progress is tracked in real-time, and a notification appears when the goal is reached.

4. Clear History:
Click the "Clear Transaction History" button to remove all transactions and reset the budget.

File Structure
bash
Copy code
├── index.html          # Main HTML file
├── style.css           # CSS for styling the app
└── script.js           # JavaScript for app logic
