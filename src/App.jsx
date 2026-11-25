import { useMemo, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Formulario from './components/Formulario'
import ListaInscritos from './components/ListaInscritos'
import './App.css'

function App() {
  const [inscritos, setInscritos] = useState([])
  const [aviso, setAviso] = useState(null)

  function adicionarInscrito(novoInscrito) {
    const emailExiste = inscritos.some(
      (pessoa) => pessoa.email.toLowerCase() === novoInscrito.email.toLowerCase()
    )
    if (emailExiste) {
      setAviso({ tipo: 'erro', texto: 'Este e-mail já possui uma inscrição.' })
      return false
    }
    setInscritos((atuais) => [...atuais, novoInscrito])
    setAviso({ tipo: 'sucesso', texto: 'Inscrição realizada com sucesso!' })
    return true
  }

  function removerInscrito(id) {
    setInscritos((atuais) => atuais.filter((pessoa) => pessoa.id !== id))
    setAviso({ tipo: 'sucesso', texto: 'Inscrição removida.' })
  }

  const total = useMemo(() => inscritos.length, [inscritos])

  return (
    <div className="app">
      <Cabecalho titulo="Semana de Tecnologia" subtitulo="Conhecimento, criatividade e inovação em um só lugar." />
      <main className="app__conteudo">
        <section className="intro">
          <span className="eyebrow">EVENTO • INSCRIÇÕES ABERTAS</span>
          <h2>Escolha sua próxima experiência.</h2>
          <p>Garanta sua vaga em uma das oficinas práticas da nossa semana de tecnologia.</p>
          <div className="stats"><strong>{total.toString().padStart(2, '0')}</strong><span>participantes inscritos</span></div>
        </section>
        {aviso && <div className={`aviso aviso--${aviso.tipo}`} role="status">{aviso.texto}</div>}
        <div className="painel">
          <Formulario aoCadastrar={adicionarInscrito} />
          <ListaInscritos inscritos={inscritos} aoRemover={removerInscrito} />
        </div>
        <footer>TechJovem Soluções <span>•</span> Protótipo acadêmico</footer>
      </main>
    </div>
  )
}
export default App
