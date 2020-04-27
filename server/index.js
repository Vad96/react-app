// const express = require('express');
// const renderToString = require('react-dom/server');
// const readFileSync = require('fs');

// const App = require('../components/App');

// const app = new express();

// app.use(express.static("build"));

// app.get("/", async (_req, res) => {

//     const index = readFileSync('build/index.html', 'utf8');
//     const rendered = renderedToString(<App/>);
//     res.send(index.replace('{{rendered}}', rendered));

// });

// app.listen(7777);
// console.log('server start')


import express from 'express';
import React from 'react';
const app = new express();

app.get("/", async (_req, res) => {
    res.send(`<div>he k</div>`);
});

app.listen(7777);
console.log('server start')
