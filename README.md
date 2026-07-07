# 🚀 Game Analytics Project

This project is a practical demonstration of a **Data Ingestion Pipeline** using modern infrastructure and analysis technologies.

## 🛠 Tech Stack
- **PostgreSQL**: Relational database for event storage.
- **Docker & Docker Compose**: Container management for infrastructure isolation.
- **Node.js**: Language used for data ingestion automation (*Data Seeding*).
- **SQL**: Language used for data analysis and insight extraction.

## 📋 Features
- **Automated Infrastructure**: Database ready for use via Docker.
- **Data Ingestion**: Seeding script that populates the database with random player event data.
- **Strategic Analysis**: SQL queries to calculate metrics (e.g., average XP per event).

## 🚀 Getting Started
1. **Clone the repository**: `git clone https://github.com/sk7biano/game-analytics-project.git`
2. **Start the container**: `docker compose up -d`
3. **Run the seeding script**: `node seed.js`
4. **Analyze the data**: Connect to the database via terminal and execute your SQL queries.

---
*Developed with a focus on Data Engineering best practices.*