const { Client } = require('pg');

const client = new Client({
  user: 'admin',
  host: 'localhost',
  database: 'game_data',
  password: 'secret_password',
  port: 5432,
});

async function seedData() {
  await client.connect();
  console.log("Conectado ao banco de dados!");

  for (let i = 0; i < 50; i++) {
    const query = 'INSERT INTO game_events (player_id, event_type, amount) VALUES ($1, $2, $3)';
    const values = [`player_${Math.floor(Math.random() * 100)}`, 'xp_gain', Math.floor(Math.random() * 1000)];
    
    await client.query(query, values);
  }

  console.log("50 registros inseridos com sucesso!");
  await client.end();
}

seedData();