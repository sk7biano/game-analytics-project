# 🚀 Game Analytics Project

Este projeto é uma demonstração prática de um **Pipeline de Ingestão de Dados** utilizando tecnologias modernas de infraestrutura e análise.

## 🛠 Tecnologias Utilizadas
- **PostgreSQL**: Banco de dados relacional para armazenamento dos eventos.
- **Docker & Docker Compose**: Gerenciamento de containers para isolamento da infraestrutura.
- **Node.js**: Linguagem utilizada para automação da carga de dados (*Data Seeding*).
- **SQL**: Linguagem utilizada para análise e extração de insights dos dados.

## 📋 Funcionalidades
- **Infraestrutura Automatizada**: Banco de dados pronto para uso via Docker.
- **Automação de Carga**: Script de *seeding* que popula o banco com dados aleatórios de eventos de jogadores.
- **Análise Estratégica**: Consultas SQL para cálculo de métricas (ex: média de XP por evento).

## 🚀 Como rodar o projeto
1. **Clone o repositório**: `git clone https://github.com/sk7biano/game-analytics-project.git`
2. **Suba o container**: `docker compose up -d`
3. **Execute o script de carga**: `node seed.js`
4. **Analise os dados**: Acesse o banco via terminal e execute suas queries SQL.

---
*Desenvolvido com foco em boas práticas de Engenharia de Dados.*