
# Expense Tracker

A simple and efficient **Expense Tracker** web application built using the **MERN stack** (MongoDB, Express, React, Node.js). This app helps you manage and track your expenses and income, allowing you to easily add and view transactions. It also calculates your current balance based on your incomes and expenses. This is my very first project using the MERN stack. It is responsive and provides good user experience. 

## Features

- Add transactions with details like price, description, and date.
- View all your transactions in a clean and organized list.
- Track your balance in real-time as you add transactions.
- Responsive design for use on both desktop and mobile devices.

## Screenshots

### Home Page
![Home Page](https://github.com/gargiiiii18/expense-tracker/blob/main/webapp%20screenshots/homepage.png?raw=true)

### Adding Transactions
![Adding new transaction](https://github.com/gargiiiii18/expense-tracker/blob/main/webapp%20screenshots/addingTransaction.png?raw=true)

### Transaction List
![After adding new treansaction](https://github.com/gargiiiii18/expense-tracker/blob/main/webapp%20screenshots/afterAdding.png?raw=true)

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS

## Installation

To run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/gargiiiii18/expense-tracker
```

### 2. Install backend dependencies

Navigate to the `api` directory and install the dependencies:

```bash
cd backend
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `backend` directory and add your MongoDB connection URL:

```bash
MONGO_URL=your_mongodb_connection_url
```

Create a `.env` file in the main project directory and add the URL you want to run your backend on:

For example:
```bash
VITE_API_URL = 'http://localhost:3000'
```

### 4. Start the backend server

Navigate to the api directory and run the following command to start the backend server:

```bash
nodemon index.js
```

### 5. Start the frontend server

Run the following command in the main project directory to start the frontend server:

```bash
npm run dev
```

## Usage

- Add a new transaction by filling in the form with the price, description, and date.
- View your transactions in a list and see your balance update in real-time.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
