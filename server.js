const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    var email = req.body.email;
    var amount = req.body.amount;
    res.send({"amount":amount,"email":email});
})

app.listen(3000,()=>{
    console.log('server running on port 3000');
});