import { Client } from 'pg';

const client = new Client({
  user: 'postgres', 
  host: 'localhost', 
  database: 'seu_banco_de_dados', 
  password: 'sua_senha', 
  port: 5432, 
});

client.connect()
  .then(() => console.log('Conectado ao PostgreSQL'))
  .catch(err => console.error('Erro ao conectar:', err))
  .finally(() => client.end()); 