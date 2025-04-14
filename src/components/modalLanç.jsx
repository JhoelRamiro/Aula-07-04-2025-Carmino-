import React from 'react'

export default function Modal({isOpen}){
    
    if(isOpen){
        return(


            <div className='Container'>
                <div className='cabeçalho'>
                    <h1>Novo lançamento</h1>
                </div>
                <div className='Descrição'>
                    <p>Descrição</p>
                    <input className='descrição' type="text" placeholder="Descrição"/>
                </div>

                <div className='Data'>
                    <p>Data</p>
                    <input type='number' placeholder="dd/mm/aaaa"/>

                    <p>Hora</p>
                    <input type="text" placeholder="HH:MM"/>
                </div>

                <div className='Valor'>
                    <p>Valor</p>
                    <input className='valor' type="number" placeholder="R$"/>
                        <label class="checkbox-container">
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                            Pago
                        </label>

                        <label class="checkbox-container">
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                        Recebido
                        </label>
                </div>

                <div className='lineButtons'>
                    <button className='BtSalvar'>Salvar</button>
                    <button className='BtCancelar'>Cancelar</button>
                </div>



            


            </div>

        )
    }

    return null
}