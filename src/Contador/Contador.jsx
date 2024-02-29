import React, {useState} from "react"
import "./Contador.css"


function Contador(){

const [numero, setNumero] = useState(0)

//Criando uma função para adicionar 1 valor ao número
function Adicionar(){
    if(numero < 15){
        setNumero(numero + 1)
    }
}

//arrow function
const Subtrair = () => {
    if(numero > 0){
        setNumero(numero - 1)
    }
}

//Criando uma função para limpar o contador, voltando ao estado inicial.
const Limpar = () => {
    setNumero(0)
}

    return(
        <section>
            <h1>{numero}</h1>
            <button onClick={Adicionar}>Adicionar</button>
            <button onClick={Subtrair}>Retirar</button>
            <button onClick={Limpar}>Limpar</button>
        </section>
    )
}

export default Contador
