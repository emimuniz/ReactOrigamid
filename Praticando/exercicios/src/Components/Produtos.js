import React from 'react';

export default function Produtos({ produtos }) {
  return (
    <div>
      <h1 style={{ color: 'green', padding: '10px' }}>Produtos</h1>
      {produtos.map(({ nome, propriedades }) => (
        <div key={nome} style={{ border: '1px solid black', margin: '10px' }}>
          <p style={{ padding: '10px' }}>{nome}</p>
          <ul>
            {propriedades.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
