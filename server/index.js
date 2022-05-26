
import express from 'express';

// import cors from 'cors';
// import bodyParser from 'body-parser';
// //components
import conn from './database/db.js';
import Router from './routes/route.js'


const app = express();
// app.use(cors())
// app.use(bodyParser.json({extended:true}));
// app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`)
    conn.connect((error)=>{
        if(error) throw error;
        console.log("Database Connected!")
    })
});



// Connection();