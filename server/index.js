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
import {readFileSync} from 'fs';

const app = new express();
app.use(express.static("build"));



app.get("/", async (_req, res) => {
    const index = readFileSync('build/index.html', 'utf8');
    res.send(index);
});

app.listen(7777);
console.log('server start')
