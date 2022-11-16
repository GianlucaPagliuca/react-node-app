// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

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