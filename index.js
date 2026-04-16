let express=require('express');
let mongoose =require('mongoose');
let cntrl =require('./routs/ruts');
// const cors = require('cors');
// app.use(cors({origin: 'https://whimsical-mochi-dad659.netlify.app',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],credentials: true
// }));
let app=express();

const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser'); // to parse JSON
app.use(bodyParser.json());

app.use(express.json());

app.use('/api',cntrl);
// http://localhost:8012/api/insrt
// http://localhost:8012/api/showall
// http://localhost:8012/api/deldata/:roll




mongoose.connect('mongodb://127.0.0.1:27017/curd').then(()=>{
    console.log("Connected to database");
    const port = process.env.PORT || 8012;
    app.listen(port,"0.0.0.0",()=>{
        console.log("Server is running on port " + port);
    });
}).catch((err)=>{
    console.log("Error connecting to database", err);
});