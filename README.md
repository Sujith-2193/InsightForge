# InsightForge Analytics

<div align="center">
  <img src="docs/images/insightforge_logo.png" alt="InsightForge Logo" width="160" />
  <br />
  <p><strong>Enterprise Business Intelligence & Machine-Learning Analytics Platform</strong></p>
  <p>
    <img src="https://img.shields.io/badge/FastAPI-0.115+-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
    <img src="https://img.shields.io/badge/React-19.0+-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/PostgreSQL-15+-336791?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/scikit--learn-ML-F7931E?style=flat-square&logo=scikit-learn&logoColor=white" alt="scikit-learn" />
    <img src="https://img.shields.io/badge/License-MIT-emerald?style=flat-square" alt="License" />
  </p>
</div>

---

## Overview

**InsightForge Analytics** is an enterprise-grade business intelligence and analytics platform. Built with a high-performance **FastAPI** backend and an obsidian-dark **React 19** cockpit interface, InsightForge delivers real-time executive KPIs, interactive financial curves, multi-dimensional cohort retention analytics, sales pipeline funnels, and predictive machine-learning forecasts.

---

## Frontend Previews: Light & Dark Modes

### Light Mode (White & Emerald Green with Multi-Colors)
<div align="center">
  <img src="docs/images/light_mode_preview.png" alt="InsightForge Light Mode Screenshot" width="100%" />
  <p><em>Light mode cockpit: crisp white surfaces, emerald green identity, and vibrant multi-color data series.</em></p>
</div>

### Dark Mode (Obsidian Executive Cockpit)
<div align="center">
  <img src="docs/images/dashboard_preview.png" alt="InsightForge Dark Mode Screenshot" width="100%" />
  <p><em>Dark mode cockpit: high-contrast obsidian zinc with illuminated neon data curves.</em></p>
</div>

---

## How It Works: Platform Architecture

InsightForge operates on a four-tier architecture designed for low-latency queries, robust statistical modeling, and seamless visual reactivity.

<div align="center">
  <img src="docs/images/architecture_flowchart.png" alt="InsightForge Platform Architecture Flowchart" width="100%" />
</div>

### End-to-End Workflow Diagram

```mermaid
flowchart TD
    subgraph Frontend["1. Frontend Cockpit (React 19 + TypeScript + Vite)"]
        UI["User Interface Components"]
        TQ["TanStack Query (Cache & State Sync)"]
        Filter["Global Date Range & Preset Filters"]
        Charts["Recharts Visual Engine (Area, Donut, Funnel, Tables)"]
        UI --> Filter
        Filter --> TQ
        TQ --> Charts
    end

    subgraph Gateway["2. API Gateway & Application Server (FastAPI + Uvicorn)"]
        Router["APIRouter (/api/...)"]
        Validate["Pydantic & Request Validation"]
        Middleware["CORS & Request ID Middleware"]
        Docs["OpenAPI / Swagger Documentation"]
        Router --> Validate
        Router --> Middleware
        Router --> Docs
    end

    subgraph ML["3. Machine Learning Engine (scikit-learn)"]
        Ridge["Ridge Regression (Revenue Time Series Forecast)"]
        GBM["Gradient Boosting (Customer Churn Risk Scoring)"]
        CI["95% Confidence Interval Calculation"]
        Ridge --> CI
    end

    subgraph Storage["4. Data Storage & Persistence (PostgreSQL + SQLAlchemy)"]
        ORM["SQLAlchemy ORM Session"]
        Cust["Customers Table"]
        Trans["Transactions Table"]
        Prod["Products Catalog"]
        Pipe["Sales Pipeline Opportunities"]
        ORM --> Cust
        ORM --> Trans
        ORM --> Prod
        ORM --> Pipe
    end

    %% Data Flow Connections
    TQ -- "HTTP REST Calls (JSON)" --> Router
    Router -- "SQL Queries" --> ORM
    ORM -- "Dataset Records" --> Router
    Router -- "Model Inference Inputs" --> ML
    ML -- "Predictions & Confidence Bands" --> Router
    Router -- "Serialized JSON Response" --> TQ
```

### Detailed Workflow Explanation:

1. **Client Interaction & State Management:**
   - The user selects date filters (`7d`, `30d`, `90d`, `YTD`, `12m`) or switches between views (Dashboard, Revenue, Customers, Operations, Forecasting).
   - **TanStack Query** manages server state, performing asynchronous background fetching, query deduplication, and memory caching.

2. **API Routing & Validation:**
   - Client requests hit the **FastAPI** ASGI server powered by **Uvicorn** on port `5001`.
   - Incoming parameters (`start_date`, `end_date`, `granularity`, `limit`) are validated before passing into domain logic.

3. **Data Access & Analytics Layer:**
   - **SQLAlchemy ORM** connects to the **PostgreSQL** relational database.
   - Optimized aggregate queries compute revenue totals, period-over-period delta percentages (`+8.1%`, `-2.9%`), customer lifetime value (LTV), and pipeline conversions.

4. **Machine Learning Inference:**
   - When requests target `/api/forecasting`, the analytics engine runs:
     - **Ridge Regression** to generate upcoming monthly revenue forecasts with lower/upper 95% confidence intervals.
     - **Gradient-Boosted Classifier** to compute customer churn probability scores and flag at-risk accounts.

5. **Client Presentation & Export:**
   - React components render animated SVG and canvas charts using **Recharts**.
   - Users can instantly export views as structured CSV data or formatted PDF executive reports.

---

## Core Modules & Features

| Module | Features & Capabilities |
| :--- | :--- |
| 📊 **Executive Dashboard** | High-level summary cards (Total Revenue, Active Accounts, AOV, Pipeline Value), historical revenue trends, category share, and top product rankings. |
| 💵 **Revenue Analytics** | Revenue velocity curves, granularity adjustments (Daily, Weekly, Monthly), vertical category breakdowns, regional performance, and deal size distribution. |
| 👥 **Customer Intelligence** | Segmentations (Enterprise, Mid-market, SMB), 12-month cohort retention heatmaps, customer acquisition curves, and lifetime value (LTV) percentiles. |
| ⚙️ **Sales Operations** | Sales representative leaderboards, quota attainment percentages, pipeline stage funnel (Lead &rarr; Demo &rarr; Negotiation &rarr; Won), and deal cycle time metrics. |
| 📈 **ML Forecasting** | Ridge-regression revenue projections, 95% confidence intervals, customer churn risk analysis, and revenue-at-risk identification. |
| ⚡ **Static Demo Mode** | Zero-dependency static snapshot mode serving pre-generated JSON responses from `frontend/public/data` for instant client-side evaluation. |

---

## Technology Stack

### Frontend
- **Framework:** React 19 (TypeScript)
- **Tooling:** Vite
- **Styling:** Tailwind CSS 4, Lucide React icons
- **Data Visualization:** Recharts
- **State & Server Sync:** TanStack React Query

### Backend & Machine Learning
- **API Framework:** FastAPI (Python 3.12)
- **ASGI Server:** Uvicorn
- **ORM & DB Layer:** SQLAlchemy, Psycopg (v3) / Psycopg2
- **Data Science:** Pandas, NumPy, scikit-learn (Ridge Regression, Gradient Boosting)
- **Testing:** Pytest, pytest-cov

### Database & Infrastructure
- **Database:** PostgreSQL 15 (Alpine)
- **Containerization:** Docker & Docker Compose
- **Web Server (Production):** Nginx Alpine

---

## Getting Started

### Option 1: Run with Docker Compose (Recommended)

The easiest way to launch the entire stack (Database, Backend API, and Frontend) is via Docker Compose:

```bash
# Clone the repository
git clone https://github.com/Sujith-2193/InsightForge.git
cd InsightForge

# Build and start all services
docker compose up --build
```

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5001](http://localhost:5001)
- **Interactive API Docs (Swagger):** [http://localhost:5001/docs](http://localhost:5001/docs)

To seed initial synthetic data inside Docker:
```bash
docker compose exec backend python reseed.py
```

---

### Option 2: Local Development Setup

#### 1. Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
# On Windows (cmd/PowerShell):
$env:APP_ENV="development"
$env:DATABASE_URL="postgresql://postgres:postgres@localhost:5432/analytics_dashboard"

# Seed the database
python reseed.py

# Start the FastAPI server
python run.py
```
The backend will be live at `http://localhost:5001`.

#### 2. Frontend Setup
```bash
cd frontend

# Install Node dependencies
npm install

# Start Vite development server
npm run dev
```
The frontend application will be live at `http://localhost:3000`.

---

### Option 3: Standalone Static Demo Build

If you wish to test the frontend without running a live database or backend:

```bash
cd frontend
npm run build:static
npm run preview
```
Visit `http://localhost:4173` to test the full frontend cockpit using static offline data snapshots.

---

## API Reference

The FastAPI backend exposes the following REST endpoints:

| Endpoint | Method | Description | Key Parameters |
| :--- | :--- | :--- | :--- |
| `/api/health` | `GET` | Service and database health check | None |
| `/api/dashboard/summary` | `GET` | Executive dashboard KPIs, trends, and category distribution | `start_date`, `end_date` |
| `/api/revenue/trends` | `GET` | Revenue time series data | `start_date`, `end_date`, `granularity` |
| `/api/revenue/by-category` | `GET` | Revenue grouped by product categories | `start_date`, `end_date` |
| `/api/revenue/top-products`| `GET` | Top revenue-generating products | `start_date`, `end_date`, `limit` |
| `/api/customers/overview` | `GET` | Customer volume, acquisition, and LTV stats | `start_date`, `end_date` |
| `/api/customers/cohorts` | `GET` | 12-month cohort retention heatmap data | `start_date`, `end_date` |
| `/api/operations/pipeline` | `GET` | Active sales pipeline by deal stages | `start_date`, `end_date` |
| `/api/operations/sales-performance` | `GET` | Sales rep performance and quota attainment | `start_date`, `end_date` |
| `/api/forecasting/revenue`| `GET` | Ridge regression revenue forecasts with 95% CIs | `months_ahead` |
| `/api/forecasting/churn-risk` | `GET` | Gradient-boosted churn risk predictions | None |

---

## Quality Assurance & Testing

InsightForge includes an automated test suite across both frontend and backend.

```bash
# Run backend tests (100% passing)
cd backend
python -m pytest -q

# Run frontend ESLint checks
cd frontend
npm run lint

# Run frontend production build
npm run build
```

---

## License

Distributed under the **MIT License**.

```text
MIT License

Copyright (c) 2026 Matluri Arun Sujith (Sujith-2193)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">
  <sub>Crafted with care by <strong>Matluri Arun Sujith</strong></sub>
</div>
