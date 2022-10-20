const { Pool } = require('pg')

//Conexión a mi db postgre
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'singlestack',
    port: '5432'
})

const getUsers = async (req, res) => {
   const response = await pool.query('SELECT * FROM users');
   res.json(response.rows)
}

const getUsersById = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const postUsers = async (req, res) => {
    const { fullname, email } = req.body;

    const response = await pool.query('INSERT INTO users (fullname, email) VALUES ($1, $2)', [fullname, email]);

    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {fullname, email}
        }
    });
}

const deleteOneUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json(`User ${id} deleted successfully`);
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { fullname, email } = req.body;
    const response = await pool.query('UPDATE users SET fullname = $1, email = $2 WHERE id = $3', [
        fullname,
        email,
        id
    ])
    res.json('User Updated Successfully');
}

module.exports = {
    getUsers,
    postUsers,
    getUsersById,
    deleteOneUser,
    updateUser,
}