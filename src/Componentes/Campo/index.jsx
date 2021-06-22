import React from 'react'
import './style.css'

import Draggable,{DraggableCore} from 'react-draggable' 

import Jogador from '../Jogadores'

export default function Campo(){

    return(

       <Draggable>

            <div className='campo'>
                        
                <div className='ataque'>
                    <Jogador />
                    <Jogador />
                    <Jogador />
                </div>

                <div className='meio'>
                    <Jogador />
                    <Jogador />
                    <Jogador />
                </div>

                <div className='defesa'>
                    <Jogador />
                    <Jogador />
                    <Jogador />
                    <Jogador />
                </div>

                <div className='goleiro'>
                    <Jogador />
                </div>

            </div>

        </Draggable>

    )

}