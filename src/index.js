import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';




ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);


