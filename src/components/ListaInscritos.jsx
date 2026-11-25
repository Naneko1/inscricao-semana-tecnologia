import './ListaInscritos.css'
function ListaInscritos({ inscritos, aoRemover }) {
  return <section className="lista">
    <div className="lista__cabecalho"><div><span className="lista__kicker">ACOMPANHAMENTO</span><h2>Participantes</h2></div><span className="lista__contador">{inscritos.length} {inscritos.length === 1 ? 'inscrito' : 'inscritos'}</span></div>
    {inscritos.length === 0 ? <div className="lista__vazia"><span>◎</span><strong>A lista está esperando por você.</strong><p>As inscrições confirmadas aparecerão aqui.</p></div> :
      <ul>{inscritos.map((pessoa) => <li key={pessoa.id} className="lista__item">
        <div className="avatar">{pessoa.nome.trim().charAt(0).toUpperCase()}</div>
        <div className="lista__dados"><strong>{pessoa.nome}</strong><span>{pessoa.email}</span><small>{pessoa.oficina}</small></div>
        <button type="button" className="lista__remover" onClick={() => aoRemover(pessoa.id)} aria-label={`Remover ${pessoa.nome}`} title="Remover inscrição">×</button>
      </li>)}</ul>}
  </section>
}
export default ListaInscritos
