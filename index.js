const express = require('express');
import {createClient} from 'redis'

const app = express();
const client = createClient();
client.set('visits', 0)
app.get('/', (req, res) => {
    client.get('visits',(err, visits) => {
        res.send('number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1)
    })
})

app.listen(8081, ()=> {
    console.log('Listing to port')
})