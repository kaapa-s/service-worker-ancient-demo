#!/usr/bin/env node
const express = require('express');
const cors = require('cors');

const app = express();

// App config


app.use(cors())

// Add headers
app.use(function (req, res, next) {

res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
  }
});

app.use(express.static('static'));
app.use('/', express.static(__dirname + '/'));  

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/products', (req, res) => {
    setTimeout(() => {
        res.json({
            products: [
                {
                    name: 'Fred\'s car',
                    price: '$999',
                    thumbnail: '/images/products/car.jpg',
                    description: 'Greener than Tesla!'
                },
                {
                    name: 'Stone wheel',
                    price: '$48',
                    thumbnail: '/images/products/wheel.jpg',
                    description: 'Don\'t let the flat wheel ruin your day, buy a spare!'
                },
                {
                    name: 'Dino',
                    price: '$2999',
                    thumbnail: '/images/products/dino.jpg',
                    description: 'Caveman\'s best friend'
                },
                {
                    name: 'Club',
                    price: '$299',
                    thumbnail: '/images/products/club.png',
                    description: 'Because you never know when the raptors are going to attack you.'
                }
            ]
        });
    }, 2000);
});

const port = 3011;

app.listen(port, () => {
    console.log('App started!', port);
});
