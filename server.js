const express = require("express");
const app = express();

app.get("/", function (req,res){
    res.send("HELLO WORLD!!!")
});

app.listen(3456, function(){
    console.log("Escuchando en el puerto 3456");
})

