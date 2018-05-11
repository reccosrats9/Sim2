const express= require('express');
const bodyParser= require('body-parser');
const controller= require('./controller');
const massive= require('massive')
require('dotenv').config()

const app = express();
const port= 3005; 

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance)
}).catch(err=>console.log(err))

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/houses/:id', controller.deleteHouse)

app.listen(port, ()=>console.log(`Rockin' on port ${port} 🎸`))
