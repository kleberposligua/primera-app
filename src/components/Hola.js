import React from 'react';

function Hola(props) {
    return (
        <div>
            <h1>PUCESE</h1>
            <h2>{props.mensaje}</h2>
            <h3>Mi primer componente react!!!</h3>
        </div>
    );
}

export default Hola;