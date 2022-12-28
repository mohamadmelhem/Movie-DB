const express = require('express');

const PORT=3000;

const app = express();
const movies = [
    { title: "Jaws", year: 1975, rating: 8 },
    { title: "Avatar", year: 2009, rating: 7.8 },
    { title: "Brazil", year: 1985, rating: 8 },
    { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

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
app.get("/movies/create", (req, res) => {
    res.send(`create`);
});

app.get("/movies/read", (req, res) => {
    res.send({
        status: 200,
        data: movies,
    });
});
app.get("/movies/read/by-date", (req, res) => {
    let sorted = movies.sort((a, b) => a.year - b.year);
    res.send({
        status: 200,
        data: sorted,
    });
});

app.get("/movies/read/by-rating", (req, res) => {
    let sorted = movies.sort((a, b) => b.rating - a.rating);
    res.send({
        status: 200,
        data: sorted,
    });
});

app.get("/movies/read/by-title", (req, res) => {
    let sorted = movies.sort((a, b) => {
        let ta = a.title.toLowerCase();
        let tb = b.title.toLowerCase();
        if (ta < tb) {
            return -1;
        }
        if (ta > tb) {
            return 1;
        }
        return 0;
    });
    res.send({
        status: 200,
        data: sorted,
    });
});

app.get('/movies/read/id/:ID', (req, res) => {
    if (req.params.ID !=" " && req.params.ID<movies.length ) {
        res.status(200).send({ status: 200, data: movies[req.params.ID] })
    } else {
        res.status(404).send({ status: 404, error: true, message: `the movie ${req.params.ID} does not exist` })
    }
});
app.get("/movies/update", (req, res) => {
    res.send(`update`);
});

app.get("/movies/delete", (req, res) => {
    res.send(`delete`);
});


app.listen(PORT, () => console.log(`server in now listening on port ${PORT}`))
     