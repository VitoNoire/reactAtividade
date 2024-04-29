import React from 'react'

const Tabela = ({ produtos }) => {
    return (
        <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <h2>Tabela de Produtos</h2>
            <table className="tabela-produtos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (KG)</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, index) => (
                        <tr key={produto.id} className={index % 2 === 0 ? 'even-row' : ''}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.estoque}</td>
                            <td className="actions">
                                <button>Editar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabela;