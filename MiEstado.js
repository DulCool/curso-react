import React, { useState } from 'react'

export const MiEstado = () => {
    /* let nombre="Castillo";
    
   const CambiarNombre= (e)=>{
        nombre= "Dulce";*/

        const [nombre, setNombre]= useState("Castillo");

        const CambiarNombre = (e, nombreFijo)=>{
          setNombre(nombreFijo);
    }

  return (
    <div>

    <h3>Componente: Mi Estado</h3>
    <p>Mi nombre es: <strong>{nombre}</strong></p>

    <button onClick={CambiarNombre}>Cambiar nombre</button>
    <input type='text' placeholder='Cambiar Nombre'
    onKeyUp={e => CambiarNombre(e, e.target.value)}/>

    </div>
  )
}

export default MiEstado