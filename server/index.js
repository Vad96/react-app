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

app.use(express.static("build"));

app.use(handleRender)

function handleRender(req, res) {
    const store = configureStore()

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    res.send(renderFullPage(html))
}

function renderFullPage(html) {
  return `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>Courses</title>
            </head>

            <body>
                <div id="app">${html}</div>
                <script src="/build/bundle.js"></script>
            </body>
        </html>
    `
}

app.listen(port)
console.log('server start')
 