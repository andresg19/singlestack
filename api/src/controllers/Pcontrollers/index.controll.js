const { Pool } = require('pg')

//Conexión a mi db postgre
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'singlestack',
    port: '5432'
})

