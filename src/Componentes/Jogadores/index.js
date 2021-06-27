import React from 'react'
import Draggable from 'react-draggable'
import './style.css'

export default function Jogador(){

    return(

        <Draggable>

            <div className='jogador'>

                <input type='text' id='nome-jogador' placeholder='Nome'></input>

            </div>

        </Draggable>

    )

}