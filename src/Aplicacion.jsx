import { Component } from "react";

export function Adivina (){

let numeroAleatorio = Math.floor(Math.random() * (10 - 1) + 1)
  let num;
  console.log(numeroAleatorio)


  function handleChange(e) {
    num = e.target.value
  }

  function ejecutar() {

    while (num !== numeroAleatorio) {

      if (num == numeroAleatorio) {
        return alert("Ganaste el numero era" + " " + numeroAleatorio)
      } else {

        return alert("Introduzca Otro Numero")
      }
    }
  }
  return (
    <div>

      <h3>Ingrese un numero del 1 al 10</h3>
      <input
        type="number"

        min="1" max="9"
        maxLength={1}
        placeholder='Ingrese Numero'
        onChange={handleChange}
      />


      <button onClick={ejecutar}>Comparar</button>




    </div>
  )
}