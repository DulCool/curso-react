import React from 'react'

export const SegundoComponente = () => {

    //asi se declaran las variables en react
    let nombre = 'Candy';
    let web = 'http://Candy-Cast.com';

    ///Declaracion de objetos
    let usuario = {
        nombre: 'Dulce',
        apellido: 'López',
        edad: 20,
        ciudad: 'Libres'
    };

    ///impriendo en consola
    console.log(usuario);

    return (
        <div>
            <hr />
            <h2> Datos del usuario</h2>
            <ul>
                <li>Nombre: {nombre} </li>
                <li>Web: {web}</li>

            </ul>
            <hr />

            <h2>DAtos de un objeto</h2>
            <ul>
           {/* nombre del objeto + nombre de la propiedad     ctrl shift i para ordenar codigo*/} 
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellido: <strong>{usuario.apellido}</strong></li>
                <li>Edad: <strong>{usuario.edad}</strong></li>
                <li>Ciudad: <strong>{usuario.ciudad}</strong></li>
            </ul>
        </div>

    )
}
