const express = require('express');

const PORT=3000;

const app = express();

app.get('/' , (req, res )=> {
    res.send('ok');
});

app.listen(PORT, () => console.log(`server in now listening on port ${PORT}`))
     