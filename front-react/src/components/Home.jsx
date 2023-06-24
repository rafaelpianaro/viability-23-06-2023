import React from 'react'

const Home = ({ items, isLoading }) => {
    return isLoading ? <h1>carregando...</h1> : (
        <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className="max-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
            <div className="max-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
                <table className="border-collapse w-full">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-800 text-white">Nome Parceiro</th>
                        <th className="py-2 px-4 bg-gray-800 text-white">Cidade Viabilidade</th>
                        <th className="py-2 px-4 bg-gray-800 text-white">Resultado Parceiro</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                        <td className="py-2 px-4 border-b border-gray-300 text-white">{item.id_parceiro_resposta.nome_parceiro}</td>
                        <td className="py-2 px-4 border-b border-gray-300 text-white">{item.id_viabilidade.cidade}</td>
                        <td className="py-2 px-4 border-b border-gray-300 text-white">{item.resultado_parceiro}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default Home
