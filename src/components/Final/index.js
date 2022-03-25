import React from 'react';
export default function Final({
    title,
    time,
    day,
    titleMovie,
    name,
    CPF,
}) 
{
    if (title === "Comprador") {
        return (
            <div className="final">
                <br />
                <h2>Comprador</h2>
                <p>Nome: {name}</p>
                <p>CPF: {CPF}</p>
            </div>
        );
    }
    else return (
        <div className="final">
            <h2>Filme e sessão</h2>
            <p>
                {titleMovie} <br />{day} {time}
            </p>
        </div>
    )
}