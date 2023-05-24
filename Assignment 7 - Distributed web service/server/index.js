const express = require("express");
const app = express()
const response = [
    {
        name: "Muneer",
        email: "khan@gmail.com"
    },
    {
        name: "abrar",
        email: "abrar@gmail.com"
    },
];
app.get("/users", (req, res) => {
    res.json(response);
})


app.listen(5000, () => {
    console.log("listening on port 5000");
})
