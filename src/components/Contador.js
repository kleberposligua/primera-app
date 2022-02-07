import React, {useState} from 'react';

const VALOR_INICIAL=0;

function Contador() {
    const [cont, setCont] = useState(VALOR_INICIAL);

    const incrementar=()=> {
        setCont(cont+1);
    }

    const decrementar=()=> {
        setCont(cont-1);
    }

    const reset=()=> {
        setCont(VALOR_INICIAL);
    }


    return (
        <div>
            <h1>Contador: {cont}</h1>
            <button onClick={ incrementar }>Incrementar</button>
            <button onClick={ decrementar }>Decrementar</button>
            <button onClick={ reset }>Reset</button>
        </div>
    );
}

export default Contador;