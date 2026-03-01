# VENEVA SUPERMARKET

## Inventory Management System

### Project Description

As a simple project, I created the **Veneva Supermarket Inventory Module System** where registered staff members check out orders by entering the amount and submitting. The amount is then deducted from the existing database with the current stocks of the supermarket automatically updating to the recent amount.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [Upcoming Updates](#upcoming-updates)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)
- [Support](#support)

## Overview

This is a complete inventory management solution designed specifically for supermarket operations. It streamlines the checkout process by allowing authorized staff to efficiently manage stock deductions and maintain accurate, real-time inventory records.

## Architecture

The project is organized into two main components:

### Backend (Django)
- Provides RESTful API endpoints for inventory operations using Django REST Framework
- Handles business logic and stock management with Django ORM
- Manages database operations and server-side processing
- Processes order submissions and stock updates
- Implements staff authentication and authorization
- Admin panel for system management

### Frontend
- Modern, responsive user interface
- Consumes backend API services
- Provides intuitive inventory checkout interface
- Real-time stock display and updates
- Staff login and dashboard

## Tech Stack

- **Backend**: Django 3.2+ with Django REST Framework
- **Frontend**: JavaScript (React/Vue/Angular)
- **Database**: SQLite/PostgreSQL/MySQL
- **Python Version**: 3.8 or higher
- **Package Manager**: pip (Python), npm/yarn (Frontend)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8 or higher
- pip (Python package manager)
- Node.js (v14 or higher) for frontend
- npm (v6 or higher) or yarn
- Git
- A code editor (VS Code recommended)

### Clone the Repository

```bash
git clone https://github.com/Aaronica123/inventory_system.git
cd inventory_system
```

---

## Backend Setup

### Step 1: Navigate to Backend Directory

```bash
cd backend
```

### Step 2: Create Virtual Environment

```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 4: Environment Configuration

Create a `.env` file in the `backend/inventory` directory with the following variables:

```env
# Django Configuration
DEBUG=True
SECRET_KEY=your-secret-key-here-change-in-production
ALLOWED_HOSTS=localhost,127.0.0.1

# Database Configuration
DB_ENGINE=django.db.backends.sqlite3
DB_NAME=db.sqlite3

# For PostgreSQL (optional):
# DB_ENGINE=django.db.backends.postgresql
# DB_NAME=veneva_supermarket
# DB_USER=your_db_user
# DB_PASSWORD=your_db_password
# DB_HOST=localhost
# DB_PORT=5432

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION_HOURS=24

# API Configuration
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
API_BASE_URL=http://localhost:8000

# Email Configuration (optional)
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_password
```

### Step 5: Database Setup

```bash
# Navigate to the project directory where manage.py is located
cd inventory

# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser (admin account)
python manage.py createsuperuser

# Load initial data (if available)
python manage.py loaddata initial_data
```

### Step 6: Create Static Files Directory

```bash
# Collect static files for production
python manage.py collectstatic --noinput
```

### Step 7: Start the Backend Server

Navigate back to the backend folder and run:

```bash
# From backend directory
cd inventory
python manage.py runserver
```

The backend server will be available at `http://localhost:8000`

### Step 8: Verify Backend

```bash
curl http://localhost:8000/api/health/
# or access in browser: http://localhost:8000/admin/
```

### Step 9: Access Django Admin Panel

Navigate to `http://localhost:8000/admin/` and log in with your superuser credentials to manage the system.

---

## Frontend Setup

### Step 1: Navigate to Frontend Directory

```bash
cd frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Environment Configuration

Create a `.env` file in the frontend directory with the following variables:

```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_API_TIMEOUT=30000

# Application Configuration
REACT_APP_APP_NAME=Veneva Supermarket
REACT_APP_VERSION=1.0.0

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=false
```

### Step 4: Start the Frontend Server

**Development Mode:**
```bash
npm start
```

The frontend application will be available at `http://localhost:3000`

**Build for Production:**
```bash
npm run build
```

### Step 5: Verify Frontend

Open your browser and navigate to `http://localhost:3000`

---

## Key Features

### 1. **Staff Authentication**
   - Secure login for registered staff members using Django authentication
   - Role-based access control (Admin, Manager, Staff)
   - Session management and auto-logout
   - JWT token-based API authentication

### 2. **Order Checkout System**
   - Intuitive interface for entering order quantities
   - Quick product search and selection
   - Multiple payment methods support
   - Order validation and confirmation

### 3. **Automatic Stock Deduction**
   - Real-time inventory updates upon order submission
   - Prevents overselling with stock validation
   - Transaction logging for audit trails
   - Atomic database transactions for consistency

### 4. **Stock Tracking**
   - Real-time inventory level display
   - Low stock alerts and notifications
   - Stock history and analytics
   - Inventory movement tracking

### 5. **Order Management**
   - Order creation and submission
   - Order history and receipt generation
   - Cancel and modify orders (with proper authorization)
   - Order status tracking

### 6. **Real-time Database Synchronization**
   - Instant updates across all sessions
   - Automatic conflict resolution
   - Data consistency and integrity
   - Django ORM for reliable data handling

### 7. **Dashboard & Reporting**
   - Staff performance metrics
   - Sales and inventory reports
   - Daily summary and analytics
   - Export reports to CSV/PDF

### 8. **User Management**
   - Add and manage staff accounts
   - Permission levels and access control
   - Activity logging and audit trails
   - Django admin panel for management

---

## How It Works

### User Workflow

#### 1. **Staff Login**
   - Staff member enters credentials
   - Django authentication validates against the database
   - Staff receives JWT token for API requests
   - Dashboard loads with available inventory

#### 2. **Browse Inventory**
   - View all available products
   - Filter by category, price, or stock level
   - Search for specific items
   - API fetches data from Django backend

#### 3. **Select Products**
   - Click on product to view details
   - Check current stock availability
   - Add to order cart

#### 4. **Enter Order Amount**
   - Specify quantity to check out
   - Verify unit price and total amount
   - Review order summary

#### 5. **Submit Order**
   - Confirm the order details
   - Process payment (if applicable)
   - System validates stock availability via API

#### 6. **Automatic Stock Update**
   - Backend deducts ordered quantity from inventory using Django ORM
   - Database transaction ensures consistency
   - Confirmation message sent to staff
   - Stock levels updated automatically

#### 7. **Order Completion**
   - Receipt generated and displayed
   - Order details saved for audit
   - Dashboard updated with new inventory levels
   - Analytics and reports updated

### Technical Flow

```
Frontend (Order Submission)
    ↓
API Request to Django Backend
    ↓
Django Views/Viewsets Processing (m1 app)
    ↓
Django ORM Database Query
    ↓
Stock Deduction Logic
    ↓
Database Transaction Commit
    ↓
Return API Response
    ↓
Frontend Updates Display
```

---

## Project Structure

```
inventory_system/
│
├── backend/                      # Django Backend
│   ├── inventory/                # Main Django Project (Settings, URLs, Config)
│   │   ├── settings.py           # Django settings and configuration
│   │   ├── urls.py               # Main URL routing
│   │   ├── wsgi.py               # WSGI configuration
│   │   ├── asgi.py               # ASGI configuration
│   │   ├── manage.py             # Django management script
│   │   └── __init__.py
│   │
│   ├── m1/                       # Main App (Models, Views, Serializers)
│   │   ├── migrations/           # Database migrations
│   │   │   ├── __init__.py
│   │   │   ├── 0001_initial.py
│   │   │   └── ...
│   │   │
│   │   ├── models.py             # Database models
│   │   │   ├── User/Staff models
│   │   │   ├── Product models
│   │   │   ├── Order models
│   │   │   ├── Inventory models
│   │   │   └── Category models
│   │   │
│   │   ├── views.py              # Django views and viewsets
│   │   │   ├── AuthenticationViews
│   │   │   ├── ProductViewSets
│   │   │   ├── OrderViewSets
│   │   │   └── InventoryViewSets
│   │   │
│   │   ├── serializers.py        # DRF serializers
│   │   │   ├── UserSerializer
│   │   │   ├── ProductSerializer
│   │   │   ├── OrderSerializer
│   │   │   └── InventorySerializer
│   │   │
│   │   ├── urls.py               # App URL routing
│   │   ├── admin.py              # Django admin configuration
│   │   ├── apps.py               # App configuration
│   │   ├── tests.py              # Unit tests
│   │   └── __init__.py
│   │
│   ├── static/                   # Static files (CSS, JS, images)
│   ├── media/                    # Uploaded files/media
│   ├── db.sqlite3                # SQLite database (development)
│   ├── requirements.txt          # Python dependencies
│   ├── .env.example              # Environment variables example
│   └── .gitignore
│
├── frontend/                     # React/Vue Frontend Application
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── OrderForm.jsx
│   │   ├── pages/                # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Inventory.jsx
│   │   │   ├── Orders.jsx
│   │   │   └── Reports.jsx
│   │   ├── services/             # API services
│   │   │   ├── authService.js
│   │   │   ├── productService.js
│   │   │   ├── orderService.js
│   │   │   └── api.js
│   │   ├── store/                # State management (Redux/Vuex)
│   │   │   ├── actions/
│   │   │   ├── reducers/
│   │   │   └── store.js
│   │   ├── styles/               # CSS/SCSS files
│   │   │   ├── global.css
│   │   │   └── components.css
│   │   ├── utils/                # Utility functions
│   │   ├── App.jsx               # Root component
│   │   └── index.js              # Entry point
│   ├── public/                   # Static assets
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── .gitignore                    # Git ignore rules
├── README.md                     # This file
└── LICENSE                       # License information
```

---

## Usage

### For Staff Members

#### Login to the System
1. Open the application in your web browser
2. Enter your registered email/username
3. Enter your password
4. Click "Login"
5. Receive JWT token for API requests

#### Check Out Orders
1. Navigate to the "Checkout" section
2. Search for products or browse by category
3. Select an item from the list
4. Enter the quantity you want to check out
5. Review the order details
6. Click "Submit Order"
7. Confirm the transaction
8. Print or download the receipt

#### View Inventory
1. Go to "Inventory" section
2. View all available products and stock levels
3. Filter by category or search
4. Check product details and pricing

#### View Order History
1. Navigate to "Orders" section
2. View all your orders
3. Click on an order to see detailed information
4. Download order receipt if needed

### For Administrators

#### Manage Staff Accounts
1. Go to Django Admin Panel: `http://localhost:8000/admin/`
2. Navigate to "Users" or "Staff Management"
3. Add new staff member with credentials
4. Assign roles and permissions
5. Deactivate/remove staff members

#### Manage Products
1. In Django Admin Panel, go to "Products"
2. Add new product to inventory
3. Update product details and pricing
4. Remove discontinued items
5. Update stock levels

#### View Reports
1. Go to "Reports" section in frontend
2. View sales reports by date range
3. Check inventory movement reports
4. Analyze staff performance metrics
5. Export data as needed

---

## Development

### Running Both Services Simultaneously

**Terminal 1 - Backend (Django):**
```bash
cd backend/inventory
source venv/bin/activate  # or venv\Scripts\activate on Windows
python manage.py runserver
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### Running Tests

**Backend Tests:**
```bash
cd backend/inventory
python manage.py test
python manage.py test --verbosity=2
python manage.py test m1  # Test m1 app specifically
```

**Frontend Tests:**
```bash
cd frontend
npm test
npm run test:coverage
```

### Code Quality

**Backend Code Style:**

```bash
cd backend/inventory

# Check code style
pip install flake8
flake8 m1/

# Format code
pip install black
black m1/

# Run linter
pip install pylint
pylint m1/
```

**Frontend Code Style:**
```bash
cd frontend
npm run lint
npm run format
```

### Creating Models and Migrations

```bash
cd backend/inventory

# After modifying models in m1/models.py
python manage.py makemigrations

# Check migration SQL
python manage.py sqlmigrate m1 migration_number

# Apply migrations
python manage.py migrate

# Roll back migrations
python manage.py migrate m1 zero
```

### Working with the m1 App

**Models Location:** `backend/inventory/m1/models.py`

**Views Location:** `backend/inventory/m1/views.py`

**Serializers Location:** `backend/inventory/m1/serializers.py`

**URL Routing Location:** `backend/inventory/m1/urls.py`

Example model in m1/models.py:
```python
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name
```

### Building for Production

**Backend:**
```bash
cd backend/inventory
python manage.py collectstatic --noinput
gunicorn inventory.wsgi:application --bind 0.0.0.0:8000
```

**Frontend:**
```bash
cd frontend
npm run build
```

### Debugging

**Backend Debugging:**

Add to your Django view in m1/views.py:
```python
import pdb; pdb.set_trace()
```

Or use Django debug toolbar:
```bash
pip install django-debug-toolbar
```

**Frontend Debugging:**
Use React DevTools browser extension for React components

### Requirements Installation

**To generate requirements.txt after adding new packages:**
```bash
cd backend
pip freeze > requirements.txt
```

---

## Contributing

We welcome contributions from the community! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/Aaronica123/inventory_system.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary
   - Add tests for new functionality

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Wait for review and feedback

### Code Style Guidelines

**Backend (Python/Django):**
- Follow PEP 8 style guide
- Use 4 spaces for indentation
- Write descriptive variable and function names
- Use docstrings for functions and classes
- Keep lines under 79 characters

**Frontend (JavaScript):**
- Use consistent indentation (2 spaces)
- Follow naming conventions (camelCase for variables, PascalCase for components)
- Write descriptive commit messages
- Add comments for complex logic

---

## Upcoming Updates

### 🚀 Version 2.0 Roadmap

We are actively working on exciting new features and improvements to make Veneva Supermarket Inventory System even more powerful and feature-rich.

#### **Enhanced Data Validation with serializer.py**
- **Status**: Coming Soon
- **Description**: Comprehensive serializer improvements to strengthen data validation and ensure data integrity across all API endpoints
- **Features**:
  - Advanced field validation for all models
  - Custom validation rules for products, orders, and inventory
  - Error handling and detailed error messages
  - Nested serializers for complex data structures
  - Read-only and write-only field management
  - Data transformation and normalization

#### **M-Pesa Payment Integration**
- **Status**: Under Development
- **Description**: Seamless integration with M-Pesa payment gateway for secure and convenient mobile money transactions
- **Features**:
  - M-Pesa authentication and authorization
  - Payment processing and verification
  - Transaction status tracking
  - Payment receipt generation
  - Refund and payment reversal support
  - Real-time payment notifications
  - Transaction history and reconciliation

#### **Multi-Location Support**
- **Status**: Planned
- **Description**: Manage inventory and operations across multiple supermarket branches
- **Features**:
  - Branch management and configuration
  - Centralized inventory tracking
  - Inter-branch stock transfers
  - Consolidated reporting and analytics
  - Branch-specific user roles and permissions

#### **Advanced Reporting & Analytics Module**
- **Status**: Planned
- **Description**: Comprehensive analytics and reporting tools for better business insights
- **Features**:
  - Sales analytics and trends
  - Inventory performance metrics
  - Staff productivity reports
  - Customer purchase patterns
  - Revenue forecasting
  - Export to multiple formats (PDF, CSV, Excel)

#### **Supplier Management Module**
- **Status**: Planned
- **Description**: Manage suppliers and streamline procurement processes
- **Features**:
  - Supplier database and contact management
  - Purchase orders automation
  - Supplier pricing and discounts
  - Order history and tracking
  - Supplier performance ratings

#### **Customer Loyalty Program**
- **Status**: Planned
- **Description**: Build customer engagement with loyalty rewards and incentives
- **Features**:
  - Loyalty points system
  - Member registration and profiles
  - Rewards redemption
  - Special offers and promotions
  - Customer segmentation

#### **Mobile App (iOS & Android)**
- **Status**: Planned
- **Description**: Native mobile applications for on-the-go inventory management
- **Features**:
  - Staff app for quick checkouts
  - Manager app for inventory oversight
  - Real-time notifications
  - Offline mode support
  - Barcode scanning

#### **Enhanced Security Features**
- **Status**: Planned
- **Description**: Advanced security and compliance features
- **Features**:
  - Two-factor authentication (2FA)
  - Biometric authentication support
  - Encryption for sensitive data
  - Audit logs and activity tracking
  - GDPR compliance
  - Regular security updates

### 🔧 Technical Improvements

- Performance optimization and caching
- API rate limiting and throttling
- WebSocket implementation for real-time updates
- Automated testing coverage expansion
- Docker containerization
- Kubernetes deployment support
- CI/CD pipeline automation

### 📅 Release Timeline

- **Q2 2026**: serializer.py enhancements + M-Pesa integration
- **Q3 2026**: Multi-location support + Advanced analytics
- **Q4 2026**: Supplier management + Loyalty program
- **2027**: Mobile apps + Additional enterprise features

### Contributing to Upcoming Features

We encourage community contributions! If you're interested in helping develop any of these upcoming features, please:

1. Open an issue to discuss your proposed changes
2. Create a feature branch
3. Submit a pull request with your implementation
4. Wait for review and feedback

---

## Authors

### Primary Developer
- **Aaronica123** - Initial project development and implementation
  - GitHub: [@Aaronica123](https://github.com/Aaronica123)
  - Project Lead and Backend Development

### Contributors
- Open for community contributions!

---

## Acknowledgments

- Thanks to all contributors and testers who have helped improve this project
- Community feedback and suggestions for feature improvements
- Inspiration from modern inventory management systems
- Open-source libraries and frameworks used in this project:
  - Django and Django REST Framework community
  - React/Vue community
  - Python community
  
### Special Thanks
- Staff members at Veneva Supermarket for providing requirements and feedback
- Development team members who provided guidance and support
- All users and early adopters for their patience and valuable feedback
- Django documentation and community resources

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please:
- Open an issue on the GitHub repository
- Contact the development team
- Check existing documentation and FAQs
- Visit Django and React documentation

## Troubleshooting

### Common Issues

**Backend Connection Failed**
- Ensure the Django development server is running on port 8000
- Check firewall settings
- Verify environment variables in .env file
- Make sure virtual environment is activated
- Verify you're in the correct directory: `backend/inventory`

**Database Connection Error**
- Ensure migrations have been applied: `python manage.py migrate`
- Check database permissions and configuration in .env
- Try deleting db.sqlite3 and running migrations again (for SQLite)
- Navigate to `backend/inventory` directory before running migrations

**Module Not Found Error**
- Ensure all dependencies are installed: `pip install -r requirements.txt`
- Make sure virtual environment is activated
- Try reinstalling: `pip install --upgrade -r requirements.txt`

**Login Issues**
- Clear browser cache and cookies
- Verify credentials are correct
- Check if account is active in Django Admin
- Verify JWT token is being sent with requests

**Stock Update Not Reflecting**
- Refresh the page
- Check internet connection
- Verify backend is processing requests
- Check Django logs for errors in m1 app

**CORS Errors**
- Ensure frontend URL is in CORS_ALLOWED_ORIGINS in .env
- Restart Django server after changing .env
- Check browser console for specific CORS error

**API Endpoints Not Found (404)**
- Verify URLs are correctly configured in `m1/urls.py` and `inventory/urls.py`
- Check URL patterns and naming conventions
- Restart the Django development server

**m1 App Not Recognized**
- Ensure `m1` is added to INSTALLED_APPS in `inventory/settings.py`
- Verify the m1 directory exists in the backend folder
- Restart Django server

For more help, contact support or open an issue on GitHub.

---

**Last Updated**: March 1, 2026  
**Version**: 1.0.0  
**Status**: Active Development
