import { useState } from 'react'
import CampoTexto from './CampoTexto'
import './Formulario.css'
const OFICINAS = ['React do zero', 'Banco de Dados', 'Robótica', 'Internet das Coisas']
function Formulario({ aoCadastrar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [oficina, setOficina] = useState('')
  const [erro, setErro] = useState('')

  function aoSalvar(evento) {
    evento.preventDefault()
    if (!nome.trim() || !email.trim() || !oficina) {
      setErro('Preencha todos os campos antes de enviar.')
      return
    }
    const cadastrado = aoCadastrar({ id: Date.now(), nome: nome.trim(), email: email.trim(), oficina })
    if (cadastrado) { setNome(''); setEmail(''); setOficina(''); setErro('') }
    else setErro('Confira o e-mail informado: ele já está cadastrado.')
  }

  return <form className="formulario" onSubmit={aoSalvar}>
    <div className="formulario__topo"><span className="numero-etapa">01</span><div><h2>Faça sua inscrição</h2><p>Preencha os dados para participar.</p></div></div>
    <CampoTexto id="nome" label="Nome completo" valor={nome} aoAlterar={setNome} placeholder="Ex.: Ana Souza" />
    <CampoTexto id="email" label="E-mail" tipo="email" valor={email} aoAlterar={setEmail} placeholder="voce@exemplo.com" />
    <div className="campo-texto"><label htmlFor="oficina">Oficina desejada</label>
      <select id="oficina" value={oficina} onChange={(e) => setOficina(e.target.value)}>
        <option value="">Selecione uma oficina</option>
        {OFICINAS.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
    {erro && <p className="formulario__erro" role="alert">{erro}</p>}
    <button className="formulario__botao" type="submit">Confirmar inscrição <span>→</span></button>
    <p className="formulario__nota">Seus dados serão utilizados apenas para organização do evento.</p>
  </form>
}
export default Formulario
