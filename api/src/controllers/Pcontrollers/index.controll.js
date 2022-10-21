const { Pool } = require('pg')

//Conexión a mi db postgre
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'singlestack',
    port: '5432'
})

const createPost = async (req, res) => {
    const { title, content, author } = req.body;

    const response = await pool.query('INSERT INTO posts (title, content, author) VALUES ($1, $2, $3)', [title, content, author]);

    res.json({
        message: 'Post Added Succesfully',
        body: {
            posteo: {title, content, author}
        }
    });
}

const getPosts = async (req, res) => {
    const response = await pool.query('SELECT * FROM posts');
    res.json(response.rows)
 }


module.exports = {
    createPost,
    getPosts,
}