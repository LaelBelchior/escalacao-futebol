import React from 'react'
import './style.css'

export default function Jogador(props){

    return(

        <div className='jogador-container'>

            <label> {props.nome} </label>
            <p> {props.posicao} </p>

        </div>

    )

}
