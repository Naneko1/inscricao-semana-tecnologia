import './Cabecalho.css'
function Cabecalho({ titulo, subtitulo }) {
  return <header className="cabecalho">
    <div className="cabecalho__marca"><span className="marca-icone">✳</span><span>TECHJOVEM</span></div>
    <div className="cabecalho__texto"><h1>{titulo}</h1><p>{subtitulo}</p></div>
    <span className="cabecalho__selo">EDIÇÃO 2026</span>
  </header>
}
export default Cabecalho
