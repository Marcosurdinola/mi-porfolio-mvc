const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mainRouter = require('./routers/main')




app.use(express.static('public'));


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/', mainRouter)


app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))