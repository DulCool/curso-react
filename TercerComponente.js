import React from 'react'

export const TercerComponente = ({nombre, apellido, ficha}) => {

    const libros = ["Harry Potter", 
        "Hielo y Fuego", 
        "El señor de los anillos"];



  return (
    <div>
        <h2>Mis libros favoritos</h2>
        <ul>
            <li>{libros[0]}</li>
            <li>{libros[1]}</li>
            <li>{libros[2]}</li>
        </ul>

        <hr/>
        <h2>Libros leídos</h2>
            <ul>
                {
                libros.map((libro, indice)=>{
                   return <li key={indice}>{libro}</li>
                })
                }
            </ul>

            <h2>Ficha Médica</h2>
           <ul>
            <li><strong>Nombre: </strong>{nombre}</li>
            <li><strong>Apellido: </strong>{apellido}</li>
            <li><strong>Alergias: </strong>{ficha.alergias}</li>
            <li><strong>Grupo sanguineo: </strong>{ficha.grupoSangre}</li>
            <li><strong>Estado de salud: </strong>{ficha.estadoSalud}</li>
            <li><strong>Altura: </strong>{ficha.altura}</li>
            </ul>

    </div>
  )
}
