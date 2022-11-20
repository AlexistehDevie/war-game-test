import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

//Make Connection to our database:
const pool = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER, 
    password: process.env.MYSQL_PASSWORD,
}).promise()

export async function getData(){
    const [rows] = await pool.query('SELECT * FROM sql9579135.war')
    return rows
}

const data = await getData();
console.log(data)



