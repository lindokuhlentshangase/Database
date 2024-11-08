const express = require('express');
const bodyParser = require('body-parser');
const {Pool} =require('pg');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todolist',
    password: '',
    port: 5432,
});

app.post('/todolist', async (req,res) => {
    const todolist = req.body;
try{
    const results = await pool.query('INSERT INTO todo(userid, username, tasks) VALUES (6, \'Thami\', \'Jogging\')');
    res.json(results.rows) 
} catch (error) {
    console.error(error.message);
    res.status(500).json({error: "server error"});
}
})

app.delete('/todolist', async (req,res) => {
    const userid = req.params;
    try{
        const results = await pool.query('DELETE FROM todo where userid = 6')
        res.json(results.rows)
    } catch(error){
        console.error(error.message);
        res.status(404).json({error: "server error"})
    }
    
})

const port = 3004

app.listen(port, () =>{
    console.log(`Server starting on http://localhost:${port}`);
  });