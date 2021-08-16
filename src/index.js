const path = require('path')
const morgan = require('morgan')
const express = require('express')
const app = express()
const {db} = require('./database')
const ApiRoutes = require('./routes/api.routes')
const ViewRoutes = require('./routes/view.routes')

//----------------------------------------livereoad
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 10);
});
//------------------------------------

//setting
app.set('port',process.env.PORT || 3000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
//static files
app.use(express.static(path.join(__dirname,'public')))

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//mio------------------------------
app.use(connectLivereload());
//---------------------------------

//routes
app.get('/',(req,res)=>{
    res.render('index')
})
app.use('/api',ApiRoutes)
app.use('/',ViewRoutes)

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`server on http://localhost:${app.get('port')}`)
})
db()