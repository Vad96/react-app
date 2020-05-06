// import React from 'react';
// import express from 'express';
// import {readFileSync} from 'fs';
// import renderToString from 'react-dom/server';

// import App from '../src/components/App';

// const app = new express();
// app.use(express.static("build"));

// app.get("/", async (_req, res) => {
//     const index = readFileSync('build/index.html', 'utf8');
//     const rendered = renderedToString(<App/>);
//     res.send(index.replace('{{rendered}}', rendered));
// });

// app.listen(7777);
// console.log('server start')

import path from 'path'
import express from 'express';
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import App from '../src/components/App';
import configureStore from "../src/redux/configureStore.prod.js";


const app = new express();
const port = 7777

//Serve static files
app.use(express.static("build"));


// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    const store = configureStore()

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const preloadedState = store.getState()

    res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title></title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
console.log('server start')
 