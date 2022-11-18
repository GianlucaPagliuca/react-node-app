// server/index.js
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1/?maxPoolSize=20&w=majority";
const client = new MongoClient(uri);
async function run(){
    try{
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ping: 1});
        console.log("Connected successfully to server");

        // Queries the database when connected and outputs everything in the console
        const result = await client.db("test").collection("test").find();
        // Need to convert it to an array to be able to see what's inside
        const resultFinal = await result.toArray();
        console.log(resultFinal);


    }   finally{
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);

//Gets the value back from the form ready to add to the database then renders the page back
app.post("/Submit-Form", (req, res) => {
    console.log(`Email: ${req.body.Email}`);
    console.log(`Password: ${req.body.Password}`);
    console.log('Create account');
    res.redirect('../client/src/App.js');
    res.end();
});

app.post("/Login", (req, res) => {
    console.log(`Email: ${req.body.Email}`);
    console.log(`Password: ${req.body.Password}`);
    console.log('Login');
    //res.redirect('../client/src/App.js');
    res.end();
});

app.get("/api/:cID", (req, res) => {
    console.log(req.params.cID);
    res.json({ message: `cID Passed in - ${req.params.cID}` });
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express! works!" });
});

app.get("/test", (req, res) => {
    res.json({ message: "New Route Works" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});