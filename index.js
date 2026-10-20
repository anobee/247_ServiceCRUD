import express from 'express'
import pg from 'pg'
const app = express()
const port = 3000
const { Pool } = pg

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mahasiswa",
    password: "Dd211103",
    port: 5432,
})  

app.get('/', (req, res) => {
    console.log('Test Data')
    pool.query('SELECT * FROM biodata')
        .then(testData=> {
            console.log(testData);
            res.json(testData.rows)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        })
})

app.post('/biodata', (req, res) => {
    const { nama, nim, alamat } = req.body

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

