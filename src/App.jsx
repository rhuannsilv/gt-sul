import { useState } from 'react'
import './App.css'

function App() {
  const [nome, SetNome] = useState('');
  const [email, SetEmail] = useState('');
  const [user, SetUser] = useState({
    nome: 'dev' 
  });
  
  function handleRegistrer(e) {
    e.preventDefault();
    if (!nome || !email) {
      alert("Preencha todos os campos")
    }
    SetUser({ nome,
      email
    });
  }

    return(
        <section>
        <h1> Cadastrar Usuário</h1>
        <hr />

         <form  onSubmit={handleRegistrer}> 
            <label htmlFor="nome">Nome:</label>
            <input
            placeholder='Digite seu nome aqui'
            type="text" 
            id="nome"
            value={nome}
            required
            onChange={(e) => SetNome (e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
            placeholder='Digite seu Email aqui'
            type="email" 
            id="email"
            value={email}
            required
            onChange={(e) => SetEmail (e.target.value)}
            />
         <button type="submit">Cadastrar</button>
         </form>

         <div>
          <span>Bem-Vindo: {user.nome} <br />
          Email: {user.email} </span>
         </div>
        </section>
    )
}

export default App
