import React from 'react'
import Jogador from '../Jogadores/'
import './style.css'

export default function Campo(){

    return(

        <div className='escalacao'>

            <h3 id='aviso-escalacao'>Mova os jogadores para personalizar o esquema tático</h3>

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
            
            <Jogador />

        </div>

    )

}