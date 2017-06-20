#!/usr/bin/env node
const express = require('express');

const app = express();

// App config
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
