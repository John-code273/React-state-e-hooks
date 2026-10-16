import { useState } from 'react'

export default function State() {
  //states
  const armas = ['adaga', 'espada', 'arco', 'martelo', 'lança', 'punhos ']
  const elementos = ['aqua', 'fogo', 'terra', 'vento']

  const [indice, setIndice] = useState(0)
  const [arma, setArma] = useState(0)
  const [showInput, setShowInput] = useState(false)

  //funçoes
  function trocarElemento() {
    if (indice == elementos.length - 1) {
      setIndice(0)
    } else {
      setIndice((indice) => (indice + 1))
      console.log(indice);
    }
  }
  function trocarArma() {
    if (arma == armas.length - 1) {
      setArma(0)
    } else {
      setArma((arma) => arma + 1)
      console.log(`índice da arma ${arma}`)
    }
  }

  return (
    <>
      <h1>Arma atual: {armas[arma]}</h1>
      <button type="button" onClick={trocarArma}>
        Próxima arma
      </button>
      <h2>deseja adicionar um elemento à arma?</h2>
      <label>adicionar elemento</label>
      <input
        type="checkbox"
        checked={showInput}
        onChange={(event) => setShowInput(event.target.checked)}
      />
      {showInput && (
        <div className='elemento'>
          <h1>Elemento atual: {elementos[indice]}</h1>
          <button type="button" onClick={trocarElemento}>
            Próximo elemento
          </button>
        </div>
      )}
    </>
  )
}