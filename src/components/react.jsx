import React from 'react';
import ReactDOM from 'react-dom';

const Compo = () => {
    return <h1>hello in there</h1>;
}

ReactDOM.render(
    <Compo />, document.querySelector('.root')
);