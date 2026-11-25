import './CampoTexto.css'
function CampoTexto({ id, label, tipo = 'text', valor, aoAlterar, placeholder, required = true }) {
  return <div className="campo-texto">
    <label htmlFor={id}>{label}</label>
    <input id={id} type={tipo} value={valor} placeholder={placeholder} onChange={(evento) => aoAlterar(evento.target.value)} required={required} />
  </div>
}
export default CampoTexto
