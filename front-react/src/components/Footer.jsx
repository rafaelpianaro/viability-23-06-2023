import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
        <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                <h3 className="text-white text-lg font-semibold mb-2">Sobre</h3>
                <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ex id tempus consectetur.
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                <h3 className="text-white text-lg font-semibold mb-2">Contato</h3>
                <p className="text-gray-400 text-sm">
                Endereço: 123 Rua Principal, Cidade, Estado, CEP
                </p>
                <p className="text-gray-400 text-sm">
                Telefone: (123) 456-7890
                </p>
                <p className="text-gray-400 text-sm">
                Email: info@empresa.com
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                <h3 className="text-white text-lg font-semibold mb-2">Redes Sociais</h3>
                <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                    <i className="fab fa-instagram"></i>
                </a>
                </div>
            </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer
