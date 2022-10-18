const pool = require('./connection');

//* Get All Tasks
const getTasks = (req, res) => {
    pool.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

//*  Get Task By Id
const getTaskById = (req, res) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

//* Post New Task
const createTask = (req, res) => {
    const { id, name, email } = request.body

    pool.query('INSERT INTO tasks (id, name, email) VALUES ($1, $2, $3) RETURNING *', [id, name, email], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Task added with ID: ${results.rows[0].id}`)
    })
}

//* Update Task
const updateTask = (req, res) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query('UPDATE tasks SET name = $1, email = $2 WHERE id = $3',[name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Task modified with ID: ${id}`)
        }
    )
}

//* delete Task
const deleteTask = (req, res) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Task deleted with ID: ${id}`)
    })
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
}