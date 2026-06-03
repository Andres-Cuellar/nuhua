export default function Strip() {
  const items = [
    'Clean Performance', 'Cruelty Free', 'Paraben Free',
    'Dermatológicamente Testeado', 'Hecho en Colombia',
    'Cera Vegetal', 'Sin Parafinas ni Ftalatos',
  ]
  const repeated = [...items, ...items]

  return (
    <div className="strip">
      <div className="strip-outer">
        <div className="strip-track">
          {repeated.map((item, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span className="strip-item">{item}</span>
              <span className="strip-dot" />
            </span>
          ))}
        </div>
        <div className="strip-track" aria-hidden>
          {repeated.map((item, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span className="strip-item">{item}</span>
              <span className="strip-dot" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
