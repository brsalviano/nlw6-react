import { useState } from "react";

export function Button() {

    //criando um estado...
    const [counter, setCounter] = useState(0)

    function increment() {
      //manipulando o valor do estado.
      //Imutavel! Nós não estamos mudando o valor de counter, mas sim atribuindo um novo counter
      setCounter(counter + 1);
    }

    return (
        <button onClick={increment}>{counter}</button>
    )
}

