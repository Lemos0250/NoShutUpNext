import { Box } from '../components/Box'
import { Footer } from '../components/Footer'
import { Topbar } from '../components/Topbar'
import { Posts } from '../components/Logic/Posts'
import React, { useState } from 'react'

export default function Index() {
  const [listPosters, setListPosters] = useState<any[]>([]);

  return (
    <div className='w-full'>
      <Topbar />

      <div className="bg-[#FFDEF6]">

        <div className="flex flex-col lg:flex-row items-start justify-between shadow-xl bg-[#FFDEF6]">
          <div className="flex flex-col ml-7 border-solid border-2 rounded-lg shadow-xl lg:p-20 p-10 pt-10 lg:mt-16 bg-white gap-10">
            {listPosters.map((poster: any, index) => (
              <Posts
                id={poster.id}
                titulo={poster.titulo}
                dataDaPublicacao={Intl.DateTimeFormat('pt-BR').format(new Date(poster.dataDaPublicacao))}
                descricao={poster.descricao}
                categorias={poster.tags}
                key={index}
              />
            ))}

            <div className='flex items-center gap-5 w-full justify-center'>
              <div >
                <button>asd</button>
              </div>
            </div>

          </div>

          <div className="p-10 bg-[#FFDEF6]"></div>

          <div className="lg:mt-16 bg-white border-solid border-2 shadow-xl rounded-lg lg:p-14 p-5 pt-10 mr-10">
            <div className="mb-10 text-center border-solid border-2 rounded-lg p-2 bg-[#a6024f] text-white text-3xl">
              <span>Canais de Apoio</span>
            </div>

            <div>
              <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}
