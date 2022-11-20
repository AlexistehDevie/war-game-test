import express from 'express';
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import {getData} from './server.js'

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static('files'))
const router = express.Router();


app.use(express.static(__dirname + '/public'));
app.use(express.static('/public/assets/images/cards'));
app.use(express.static('/public/assets/images'));

app.use('/js',express.static(path.join(__dirname, '/public/assets/js')));
app.use('/css',express.static(path.join(__dirname, '/public/assets/css')));

// HTML Routes
app.use('/', router)


router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, "../start.html"));
})
router.get('/war', (req,res)=> {
    res.sendFile(path.join(__dirname, "../index.html"));
})
router.get('/score', (req,res)=> {
    res.sendFile(path.join(__dirname, "../finalScore.html"));
})

// Data
export async function sendStats(){


app.get("/data", (req,res)=> {
    const data = getData()
    res.json(data)
})
app.post("/data",(req, res) => {
    const {name, score} = req.body
    const data = createData(name, score)
    res.json(data)
} )
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something Broke!')
})
}
app.listen(7878, ()=> {
    console.log('Server is running on port 9191')
})

const data = await sendStats();

