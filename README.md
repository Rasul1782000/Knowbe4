<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular"/>
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/PrimeNG-9C27B0?style=for-the-badge&logo=primeng&logoColor=white" alt="PrimeNG"/>
  <img src="https://img.shields.io/badge/Highcharts-FF6F00?style=for-the-badge&logo=highcharts&logoColor=white" alt="Highcharts"/>
</p>

<h1 align="center">
  🚀 KnowBe4
</h1>

<p align="center">
  <b>A comprehensive platform for hiring and managing seasonal & onshore developers</b>
  <br/>
  Built with <b>Angular 20</b> 🅰️ + <b>Laravel 7</b> 🐘
</p>

<p align="center">
  <a href="#-description">📖 Description</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">🛠️ Tech Stack</a> •
  <a href="#-getting-started">⚡ Getting Started</a> •
  <a href="#-project-structure">📁 Structure</a> •
  <a href="#-api-reference">🔌 API</a> •
  <a href="#-contributing">🤝 Contributing</a>
</p>

---

## 📖 Description

**KnowBe4** is a full-featured **CRM & developer management platform** that empowers companies to efficiently hire, onboard, and manage seasonal or onshore developers. It combines a powerful **Angular 20** frontend with a **Laravel 7** backend to deliver:

- 📊 Real-time dashboards with actionable analytics
- 🔐 Secure JWT-based authentication with OTP verification
- 👥 Team and project management tools
- 📈 Interactive charts & data visualizations
- 🎨 Modern, dark-themed UI powered by PrimeNG & DaisyUI

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Login, signup, forgot password, OTP verification flow |
| 📊 **Dashboard** | Sales metrics, expense tracking, leaderboard, geo maps, weekly progress charts |
| 💬 **Messages** | Customer messaging system with pagination |
| 📅 **Calendar** | FullCalendar-based event management |
| 👥 **Teams** | Team management and collaboration |
| 📈 **Reports** | Interactive bar charts with theme-aware styling |
| 📁 **Projects** | Project management workspace |
| ⚙️ **Settings** | Nested settings — Basic Info, Billing, Mode, Membership |
| 🛠️ **Tools** | Email, automation, and integration management |
| 📱 **Responsive** | Fully responsive dark-themed UI |

---

## 🛠️ Tech Stack

### 🅰️ Frontend

| Technology | Purpose |
|---|---|
| **Angular 20** | Frontend framework |
| **TypeScript 5.9** | Programming language |
| **SCSS + Tailwind CSS 4** | Styling & utility classes |
| **DaisyUI 5 + FlyonUI 2** | UI component library |
| **PrimeNG 20** | Rich UI components (table, dock, tree, accordion, chart) |
| **Angular Material 20** | Material Design components |
| **Nebular 16** | Theme system & Eva Icons |
| **Highcharts 12** | Interactive charting |
| **ag-charts 12** | Advanced charting |
| **Chart.js 4** | Canvas-based charts |
| **FullCalendar 6** | Calendar & event management |

### 🐘 Backend

| Technology | Purpose |
|---|---|
| **Laravel 7** | PHP backend framework |
| **JWT Authentication** | Secure API access |
| **RESTful API** | Customer & OTP endpoints |

---

## ⚡ Getting Started

### 📋 Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 20 (`npm install -g @angular/cli`)
- PHP 7.4+ with Composer
- Git

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/Rasul1782000/Knowbe4.git
cd Knowbe4

# Frontend setup
cd crm-app
npm install
ng serve
# → http://localhost:4200 🎉

# Backend setup (in a separate terminal)
cd src/app/service
composer install
php artisan serve
# → http://localhost:8000 🎉
```

### 🏗️ Build

```bash
cd crm-app
ng build
```

---

## 📁 Project Structure

```
Knowbe4/
├── 📂 crm-app/                        # 🅰️ Angular Frontend
│   ├── 📂 src/app/
│   │   ├── 📂 components/             # 🧩 45 reusable UI components
│   │   ├── 📂 page/                   # 📄 20 page-level routed components
│   │   ├── 📂 service/                # 📡 Angular services + 🐘 Laravel backend
│   │   ├── 📂 domain/                 # 📋 TypeScript interfaces
│   │   ├── 📂 models/                 # 📦 Model classes
│   │   ├── 📄 app-module.ts           # 📦 Root module
│   │   ├── 📄 app-routing-module.ts   # 🧭 Route definitions
│   │   └── 📄 README.md              # 📖 Extended docs
│   ├── 📄 angular.json                # ⚙️ CLI config
│   ├── 📄 package.json                # 📦 Dependencies
│   └── 📄 tsconfig.json              # 🔧 TypeScript config
├── 📂 public/                         # 🌐 Public assets
└── 📄 README.md                       # 📖 You are here
```

### 🧩 Pages Overview

| Route | Page | Description |
|---|---|---|
| `/login` | LoginPage | 🔐 Email/password + social login |
| `/signup` | SignupPage | 📝 User registration |
| `/forgot-password` | ForgotPasswordPage | 🔄 Password reset |
| `/login/otpage` | VerifyOTPage | ✅ OTP verification |
| `/home` | DashboardPage | 📊 Main dashboard |
| `/messages` | MessagesPage | 💬 Customer messages |
| `/calendar` | CalendarPage | 📅 Event calendar |
| `/teams` | TeamsPage | 👥 Team management |
| `/reports` | ReportsPage | 📈 Analytics & reports |
| `/application/projects` | ProjectsPage | 📁 Project workspace |
| `/application/services` | ServicesPage | 🛠️ Services management |
| `/tools/email` | EmailPage | 📧 Email tools |
| `/tools/automation` | AutomationPage | 🤖 Automation tools |
| `/tools/integration` | IntegrationPage | 🔗 Integration tools |
| `/settings` | SettingsPage | ⚙️ App settings |

---

## 🔌 API Reference

Base URL: `http://localhost:8004`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/customers` | 📋 List all customers |
| `GET` | `/customers/{id}` | 🔍 Get customer by ID |
| `POST` | `/customers` | ➕ Create a customer |
| `PUT` | `/customers/{id}` | ✏️ Update a customer |
| `DELETE` | `/customers/{id}` | 🗑️ Delete a customer |
| `POST` | `/otp/send` | 📱 Send OTP |
| `POST` | `/otp/verify` | ✅ Verify OTP |

---

## 🤝 Contributing

1. 🍴 **Fork** the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing`)
5. 🔀 Open a **Pull Request**

---

## 📜 License

📄 No license provided. All rights reserved.

---

## 👨‍💻 Author

**Rasul Ahmed Khan**
- 📧 Email: rasulahmedkhan17@gmail.com
- 🐙 GitHub: [@Rasul1782000](https://github.com/Rasul1782000)

---

<p align="center">
  <sub>Built with ❤️ using Angular 🅰️ & Laravel 🐘</sub>
  <br/>
  <sub>Copyright © 2024 Rasul Ahmed Khan</sub>
</p>
