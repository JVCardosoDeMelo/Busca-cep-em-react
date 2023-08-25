import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  const [endereco , setEndereco] = useState({})
     
     
  function manipularEndereco(evento) {
    const cep = evento.target.value
    setEndereco({
      cep
    })

    if(cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      .then(dados =>{
        setEndereco(enderecoAntigo => {
          return {
            ...enderecoAntigo,
            logradouro:dados.logradouro,
             bairro:dados.bairro,
             cidade:dados.localidade,
             estado:dados.uf
          }
        })
      }) 
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='texto'> Coloque um cep e veja a magia</h2>
        <input  className='input'placeholder='Digite o cep' onChange={manipularEndereco}  />
        <ul className='lista'>
          <li>Rua:{endereco.logradouro}</li>
          <li>Cep:{endereco.cep}</li>
          <li>Bairro:{endereco.bairro}</li>
          <li>Cidade:{endereco.cidade}</li>
          <li>Estado:{endereco.estado}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
