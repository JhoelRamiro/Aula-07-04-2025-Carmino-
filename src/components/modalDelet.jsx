import React from 'react'

export default function Deletar ({isOpen}){
    
    if(isOpen){
        return(


            <div className='ContainerDelet'>
                <div className='cabeçalho'>
                    <h1>Deletar</h1>
                </div>
                <div className='texto'><p1 className='texto'>Você tem certeza de excluir este registro?</p1></div>
                <div className='lineButtons'>
                    <button className='Btapagar'>Sim</button>
                    <button className='Btcancelar'>Cancelar</button>
                </div>
            </div>

        )
    }

    return null
}