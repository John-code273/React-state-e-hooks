import { useState } from 'react'

export default function State() {
  const elementos = ['aqua', 'fogo', 'terra', 'vento']
  const [indice, setIndice] = useState(0)
  function trocarElemento() {
    if (indice == elementos.length -1){
      setIndice(0)
    }else{
    setIndice((indice) => (indice +1))
    console.log(indice);}
  }

  return (
    <>
      <h1>Elemento atual: {elementos[indice]}</h1>
      <button type="button" onClick={trocarElemento}>
        Próximo elemento
      </button>
    </>
  )
}