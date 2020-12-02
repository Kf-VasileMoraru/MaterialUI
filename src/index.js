import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import {BrowserRouter} from 'react-router-dom';

function xx(){
    console.log('aaaaaaaaaaaa');
}


function AA() {
    const [count, setCount] = useState(0);
    console.log('BBBBBB');
    xx();



    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(x => {
                console.log('CCCCCCC');
                return (x + 1);

            })}>increment
            </button>

        </div>
    );

}


ReactDOM.render(
    <BrowserRouter>
        <AA/>
    </BrowserRouter>,
    document.getElementById('root')
);


