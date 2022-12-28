const express = require('express');

const PORT=3000;

const app = express();

app.get('/' , (req, res )=> {
    res.send('ok');
});


app.get  ('/test' , function(req, res){
    res.status(200).send({status:200, message:'ok'});

});
app.get('/time', function(req, res){
    let time= new Date();
    res.status(200).send({status:200, message:`${time.getHours()}:${time.getMinutes()}}`})
})
app.get('/hello/:userID', (req, res)=>{
    res.status(200).send({status:200, message:`Hello ${req.params.userID}`})
});
app.get('/search', (req, res)=>{
    if(req.query.s){
        res.status(200).send({status:200, message:"ok", data:req.query.s})
    }else{
        res.status(500).send({status:500, error:true, message:"you have to provide a search"})
        }
});
app.listen(PORT, () => console.log(`server in now listening on port ${PORT}`))
     