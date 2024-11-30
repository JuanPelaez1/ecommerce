const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mi_base_de_datos_usuarios',
    password: 'admin',
    port: 5432
});

pool.connect()
    .then(() => console.log('Conexion exitosa a PostgreSQL'))
    .catch(err => console.error('Error al conectar al PostgreSQL:', err.message));

module.exports = pool;