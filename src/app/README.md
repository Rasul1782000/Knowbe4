# KnowBe4
[![TypeScript](https://img.shields.io/badge/TypeScript-294E80?style=for-the-badge&logo=typescript&logoColor=white)]
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)]
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)]

A platform built with Angular 20 and Laravel 7 that helps companies hire and manage seasonal or onshore developers efficiently. It offers intuitive dashboards, detailed analytics, and secure JWT authentication. Future plans include AI-based skill matching.



## Table of Contents
- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Footer](#footer)



## Description
KnowBe4 is a comprehensive platform designed to streamline the process of hiring and managing seasonal or onshore developers. Built with Angular 20 on the frontend and Laravel 7 on the backend, KnowBe4 provides intuitive dashboards, detailed analytics, and secure JWT authentication. The platform aims to efficiently connect companies with the right developers, with future plans to incorporate AI-based skill matching.



## Features
- **Intuitive Dashboards:** Provides a clear and user-friendly interface for managing developers and projects. 📊
- **Detailed Analytics:** Offers in-depth insights into developer performance and project progress. 📈
- **Secure JWT Authentication:** Ensures secure access and data protection. 🔒
- **AI-Based Skill Matching (Future):** Planned implementation for intelligent matching of developers to projects based on skills. 🤖
- **Comprehensive Component Library:** Utilizes PrimeNG, Material, Nebular, and Bootstrap for rich UI elements. 🎨
- **Interactive Charts and Data Visualization:** Employs Highcharts, ag-charts, and google-charts to display data effectively. 📊
- **Role-Based Access Control** Settings menu with Basic Info, Billing, Mode, and Membership options.



## Tech Stack
- **Frontend:**
    - Angular 20 🅰️
    - TypeScript 🟦
    - HTML 🧱
    - SCSS 🎨
    - Tailwind CSS 💨
    - Bootstrap 5 💙
    - PrimeNG, Angular Material, Nebular
- **Backend:**
    - Laravel 7 🧡
    - PHP
- **Charting Libraries:**
    - Highcharts 📈
    - ag-charts
    - google-charts



## Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rasul1782000/Knowbe4.git
    cd Knowbe4
    ```
2.  **Frontend Setup (Angular):**
    - Navigate to the frontend directory.
    ```bash
    # Install Angular CLI globally if you haven't already
    npm install -g @angular/cli

    # Navigate to the frontend directory
    cd crm-app

    # Install dependencies
    npm install
    ```
3.  **Backend Setup (Laravel):**
    - Navigate to the Laravel backend directory.
    ```bash
    # Navigate to the Laravel backend directory (assuming it is in `src/app/service`)
    cd src/app/service

    # Install dependencies using composer
    composer install
    ```
4.  **Environment Configuration:**
    - Configure environment variables for both frontend and backend (if needed).



## Usage
1.  **Start the Angular development server:**
    ```bash
    cd crm-app
    ng serve
    ```
    Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

2.  **Start the Laravel backend server:**
    ```bash
    cd src/app/service
    php artisan serve
    ```
    The backend server will typically start on `http://localhost:8000`.

3.  **Building the Angular project:**
    ```bash
    cd crm-app
    ng build
    ```

4. **Code scaffolding**

    Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

    ```bash
    ng generate component component-name
    ```

    For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

    ```bash
    ng generate --help
    ```

5. **Running unit tests**

    To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

    ```bash
    ng test
    ```

**Real World Use Cases:**

- **Developer Hiring**: Efficiently manages the hiring process for both seasonal and permanent developers.
- **Project Management**: Organizes projects, services and teams with a centralized platform.
- **Data Analysis**: Leverages data visualizations such as charts and graphs, providing insights on developer performance and overall project status.



## Project Structure
```
Knowbe4/
├── crm-app/                  # Angular Frontend
│   ├── src/                  # Source Code
│   │   ├── app/              # Application Modules
│   │   ├── assets/           # Static Assets
│   │   ├── environments/     # Environment Configuration
│   │   ├── index.html        # Main HTML file
│   │   ├── main.ts           # Entry point for Angular App
│   │   ├── app-module.ts     # Defines the components to be imported and used, imports external modules to support the app
│   │   ├── app-routing-module.ts     # Defines the routes of the application, allowing navigation between different components and features
│   │   ├── app.ts     # main app component
│   │   └── ...
│   ├── angular.json        # Angular CLI Configuration
│   ├── package.json        # Dependencies and Scripts
│   ├── tsconfig.json       # TypeScript Configuration
│   └── ...
├── src/app/service/        # Laravel Backend
│   ├── app/              # Application Logic
│   ├── bootstrap/        # Bootstrapping Code
│   ├── config/           # Configuration Files
│   ├── database/         # Database Migrations and Seeds
│   ├── public/           # Public Assets
│   ├── routes/           # API Routes
│   ├── composer.json     # Dependencies and Scripts
│   └── ...
├── README.md               # Project Documentation
└── ...
```



## API Reference
The backend API is built with Laravel and provides endpoints for customer management and authentication.

- **Base URL:** `http://localhost:8004`



### Endpoints:
- `GET /customers`: Retrieves all customers.
- `GET /customers/{id}`: Retrieves a specific customer by ID.
- `POST /customers`: Creates a new customer.
- `PUT /customers/{id}`: Updates an existing customer.
- `DELETE /customers/{id}`: Deletes a customer.
- `POST /otp/send`: Sends OTP to the given email.
- `POST /otp/verify`: Verifies OTP.



## Contributing
Contributions are welcome! Here's how you can contribute:

1.  Fork the repository. 🍴
2.  Create a new branch for your feature or bug fix. 🌿
3.  Implement your changes.
4.  Test your changes thoroughly. ✅
5.  Submit a pull request. 🚀



## License
No license provided. All rights reserved.



## Important Links
- Repository: [https://github.com/Rasul1782000/Knowbe4](https://github.com/Rasul1782000/Knowbe4)



## Footer
Copyright (c) 2024 Rasul Ahmed Khan.

- Repository: [Knowbe4](https://github.com/Rasul1782000/Knowbe4) 📚
- Author: Rasul Ahmed Khan 👨‍💻
- Contact: rasulahmedkhan17@gmail.com 📧

⭐️ Like this project? Give it a star! 🌟
➡️ Want to contribute? Fork it! 🚀
🐛 Found a bug? Report an issue! 🐞


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**
