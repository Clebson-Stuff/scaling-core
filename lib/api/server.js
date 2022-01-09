const app = require('./app')
const port = 3333

app.listen(port, ()=> {
    console.log("Serve listen in port: "+port);
});