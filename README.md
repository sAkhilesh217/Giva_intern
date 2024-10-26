Prerequisites

Before running the application, ensure you have the following installed on your system:

    Node.js (version 10.8.2 or higher)
    npm (version 10.8.2 or higher)
    PostgreSQL (version 15+ or higher)

Checking Installed Versions

You can check your installed versions by running the following commands:

    node --version
    npm --version

Getting Started
1. Clone the Repository

First, clone the repository to your local machine.

2. Set Up the Database

    Install PostgreSQL: If you haven’t already installed PostgreSQL, download and install it from the official site.

    Create the Database: After installing, create a new database called productdb in PostgreSQL. You can use the PostgreSQL command line or a GUI tool like pgAdmin.

   Navigate to the backend directory:

        cd backend

The .env file already exists. Please open it and update it:

        DB_USER=postgres
        DB_PASSWORD=1234
        DB_HOST=localhost
        DB_PORT=5432
        DB_NAME=productdb

3. Start the Application

    Frontend:
        Navigate to the frontend directory:

        cd frontend

Install the required packages:

    npm install

Start the frontend application:

    npm start

Backend:

  Open a new terminal window/tab, and navigate to the backend directory:

    cd ../backend

Start the backend server:
    
    node index.js
