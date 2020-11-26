//REQUIRES
const path = require('path');

const express = require("express");
const bodyparser = require("body-parser");
const cors = require ("cors");
const MongoClient = require ('mongodb').MongoClient;

const app = express();
const spelerRouter = express.Router();
const port = 4000;

const URI = "mongodb+srv://admin:admin@cluster0.6du3n.mongodb.net/Team?retryWrites=true&w=majority";
const databaseName = "Team";
const client = new MongoClient(URI, {useNewUrlParser:true});

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());


spelerRouter.route('/Spelers')
    .get((req, res) => {
        collection = db.collection("Spelers");
        collection.find({}).toArray((error,result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.json(result);
        });
    })
    .post((req, res) => {

    })

    .put((req, res) => {

    })

    .patch((req, res) => {

    })
app.use('/api', spelerRouter);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/info.html'))
    console.log(`Succes`);
})
app.listen(port, () => {
    console.log(`Running on port ${port}`);
    client.connect(err => {
        if(err) {
            throw err;
        }
        db = client.db(databaseName);
        console.log(`connected to database: ${databaseName}`);
    })
})


