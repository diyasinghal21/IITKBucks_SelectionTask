const express = require("express");
const bodyParser = require("body-parser");
var hash=require('hash.js');

const app = express();

app.use(bodyParser.json({ type: "application/json" }));

app.post("/hash", (req, res, next) => {
var answer = hash.sha256().update(req.body.data).digest('hex');
res.end(JSON.stringify({hash : answer}));
});

app.listen(8787);
