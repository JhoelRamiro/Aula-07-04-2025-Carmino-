import { link } from "fs"
import { useState } from "react";
import Modal from "./modalLanç";
import Editar from "./modalEditar";
import Deletar from "./modalDelet";

<link rel="styleheet" href="App.css"></link>;

export function Registros() {

    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)
    
    /*
    const dados=[
        { id: 1, nome: "João", idade: 25 },
        { id: 2, nome: "Maria", idade: 30 },
        { id: 3, nome: "Pedro", idade: 22 },
    ]
    
    return(
        <div>
            <p>Nova Tabela</p>

            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.idade}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};*/

return(

<div className='Registro'> 
    <p>Nova tabela </p>
    <br />
<table>

    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Descrição</th>
            <th scope="col">Data</th>
            <th scope="col">Hora</th>
            <th scope="col">Valor($)</th>
            <th scope="col">Tipo</th>
            <th scope="col">Ações</th>
        </tr>
    </thead>
    



    <tbody>
    <tr>
        <th scope="row">1</th>
        <td>Compra de material de escrtório</td>
        <td>08/12/2024</td>
        <td>14:00</td>
        <td>200,00</td>
        <td>Pago</td>
        <td><button className="editar" onClick={() => setOpenModal2(true)}>Editar</button> | <button className="deletar" onClick={() => setOpenModal3(true)}  >Deletar</button></td>
        <div>
        <Editar isOpen ={openModal2} />
        </div>
        <div>
        <Deletar isOpen={openModal3} />
    </div>

    </tr>

    <tr>
        <th scope="row">2</th>
        <td>Recebimento de cliente</td>
        <td>08/12/2024</td>
        <td>12:23</td>
        <td>1500,00</td>
        <td>Recebido</td>
        <td>Editar | Deletar</td>
    </tr>

    <tr>
        <th scope="row">3</th>
        <td>Pagamento de serviços</td>
        <td>07/05/2024</td>
        <td>10:30</td>
        <td>750,00</td>
        <td>Pago</td>
        <td>Editar | Deletar</td>
    </tr>
    <tr>
        <th scope="row">4</th>
        <td>Recebimento de cliente</td>
        <td>07/05/2024</td>
        <td>9:45</td>
        <td>650,00</td>
        <td>Recebido</td>
        <td>Editar | Deletar</td>
    </tr>

    <tr>
        <th scope="row">5</th>
        <td>Pagamento de impostos</td>
        <td>06/05/2024</td>
        <td>15:27</td>
        <td>1345,00</td>
        <td>Pago</td>
        <td>Editar | Deletar</td>
    </tr>

    <tr>
        <th scope="row">6</th>
        <td>Pagamento de emolumentos</td>
        <td>06/05/2024</td>
        <td>12:30</td>
        <td>850,00</td>
        <td>Pago</td>
        <td>Editar | Deletar</td>
    </tr>
    </tbody>
</table>
<br />
<br />



<div className='formulario'>
    <div className='campo'>
        <label htmlFor="totalPagos">Total de pagos</label>
        <input id="totalPagos" type="number" placeholder="3145,23" step="any"/>
    </div> 

    <div className='campo'>
        <label htmlFor="totalRecebidos">Total de recebidos</label>
        <input id="totalRecebidos" type="number" placeholder="2150,00" step="any"/>
    </div>

    <div className='campo'>
        <label htmlFor="saldo">Saldo</label>
        <input id="saldo" type="number" placeholder="995,23"/>
    </div>

    <div>
        <button className="BTlançamento" onClick={() => setOpenModal(true)}>Novo lançamento</button>
    </div>
    <div>
        <Modal isOpen={openModal} />
    </div>
</div>

</div>

)
}